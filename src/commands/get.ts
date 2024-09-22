import SteamUser from "steam-user";
import { CommandOptions } from "./commands";
import { helpCommand } from "./help";
import { MatchRetriever } from "../matches";
import { CMsgClientToGCGetMatchHistoryResponse_Match } from "../proto/citadel_gcmessages_client";
import { DEADLOCK_APP_ID, DEFAULT_TIMEOUT } from "../steamHandlers";
import * as fs from "fs";
import { log, LogLevel } from "../terminalUtils";

export function getCommand(options: CommandOptions) {
  const [subcommand] = options.args;

  // Reduce the followup args to remove the sub command
  options.args = options.args.slice(1);

  if (subcommand === "history") {
    getHistory(options);
  } else if (subcommand === "match") {
    getMatch(options);
  } else {
    log(LogLevel.ERROR, `Unknown subcommand "${subcommand}".`);
    helpCommand(options);
  }
}

async function getHistory(options: CommandOptions) {
  // Check for the "-o" flag to determine if we should output to a specific file
  const outputFlagIndex = options.args.indexOf("-o");
  let outputFilePath = "matches.json";
  if (outputFlagIndex !== -1) {
    if (outputFlagIndex + 1 >= options.args.length) {
      log(LogLevel.ERROR, "No output file path provided after -o flag");
      process.exit(1);
    }

    outputFilePath = options.args[outputFlagIndex + 1];
    options.args.splice(outputFlagIndex, 2);
  }

  // Get the match history
  log(
    LogLevel.INFO,
    `Getting match history and placing results at '${outputFilePath}'...`
  );
  const matchHistory = await getSteamUserMatchHistory(options.user);

  if (!matchHistory) {
    log(LogLevel.ERROR, "Failed to get match history");
    log(LogLevel.INFO, "Exiting...");
    process.exit(1);
  }

  // Save the match history to the output file
  log(LogLevel.INFO, `Match history saved to '${outputFilePath}'`);
  fs.writeFileSync(outputFilePath, JSON.stringify(matchHistory, null, 2));

  process.exit(0);
}

async function getSteamUserMatchHistory(
  client: SteamUser
): Promise<CMsgClientToGCGetMatchHistoryResponse_Match[] | undefined> {
  // Retry attempts
  const MAX_RETRIES = 3;
  let attempts = 0;

  // Return a promise that resolves when the match history is retrieved (or rejects if it times out)
  return new Promise((resolve, reject) => {
    const getMatchesRetry = () => {
      attempts++;
      log(LogLevel.DEBUG, `Attempt ${attempts} to get match history`);

      // Match retrieval
      const matchRetriever = new MatchRetriever(client, DEADLOCK_APP_ID);
      matchRetriever.queryMatchHistory();

      // Set a timeout for the match history retrieval
      const timeout = setTimeout(() => {
        // Retry the match history retrieval if it timed out
        log(
          LogLevel.ERROR,
          `Match history retrieval timed out on attempt ${attempts}`
        );

        if (attempts < MAX_RETRIES) {
          getMatchesRetry();
          return;
        }

        // Reject the promise if the max retries have been reached
        reject(
          `Match history retrieval timed out after ${MAX_RETRIES} attempts`
        );
      }, DEFAULT_TIMEOUT);

      // Check periodically if the match history retrieval is complete
      const checkIfComplete = setInterval(() => {
        if (matchRetriever.isDoneRetrieving()) {
          // Stop the timers
          clearInterval(checkIfComplete);
          clearTimeout(timeout);

          resolve(matchRetriever.getMatches());
        }
      }, 500);
    };

    getMatchesRetry();
  });
}

function getMatch(options: CommandOptions) {
  log(LogLevel.INFO, "Getting match");
  log(LogLevel.DEBUG, String(options));
}
