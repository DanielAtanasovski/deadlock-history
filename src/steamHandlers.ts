// ============================= Steam Events ================================== \\
// ============================================================================= \\

import SteamUser, { EMsg } from "steam-user";
import { EGCBaseClientMsg } from "./proto/gcsystemmsgs";
import fs from "fs";
import { collectCredentials, UserCredentials } from "./lib/credentials";
import { log, LogLevel } from "./terminalUtils";
import {
  CMsgCitadelClientHello,
  EGCCitadelClientMessages,
} from "./proto/citadel_gcmessages_client";
import { ECitadelRegionMode } from "./proto/citadel_gcmessages_common";

export const DEADLOCK_APP_ID = 1422450;
export const DEFAULT_TIMEOUT = 5000;
export const STARTUP_TIMEOUT = 15000;

export async function loginToSteam(client: SteamUser): Promise<void> {
  if (fs.existsSync("token.txt")) {
    log(LogLevel.DEBUG, "Attempting login with token...");
    const token = fs.readFileSync("token.txt", "utf8");
    client.logOn({
      refreshToken: token,
    });
  } else {
    collectCredentials().then((credentials: UserCredentials) => {
      client.logOn({
        accountName: credentials.accountName,
        password: credentials.password,
      });
    });
  }

  // Wait for the loggedOn event to be emitted
  return new Promise((resolve) => {
    client.once("loggedOn", () => {
      log(LogLevel.DEBUG, "Logged into Steam");
      resolve();
    });
  });
}

export async function launchDeadlock(client: SteamUser): Promise<void> {
  // Setup promise to wait for the app to launch
  const promise: Promise<void> = new Promise((resolve, reject) => {
    client.once("appLaunched", (appId) => {
      log(LogLevel.DEBUG, `Launched Deadlock (${appId})`);
      // Send a Hello message to the GC
      client.sendToGC(
        appId,
        EGCBaseClientMsg.k_EMsgGCClientHello,
        {},
        Buffer.from(
          CMsgCitadelClientHello.toBinary({
            regionMode: ECitadelRegionMode.k_ECitadelRegionMode_Oceania,
          })
        )
      );

      // Listen for a random message from the GC to confirm the app has launched
      client.on("receivedFromGC", (appId, type) => {
        if (type === EGCCitadelClientMessages.k_EMsgGCToClientDevPlaytestStatus)
          resolve();
      });
    });

    setTimeout(() => {
      reject("Timed out waiting for Deadlock to launch.");
    }, STARTUP_TIMEOUT);
  });

  // Launch the app
  client.gamesPlayed([DEADLOCK_APP_ID]);

  return promise;
}

export function setupSteamEventHandlers(client: SteamUser) {
  // Entry point
  client.on("receivedFromGC", (appId: number, type: number) => {
    // Search the EMsg enum values for one that matches the type
    // and get the key of that value
    const messageType = getMessageType(type);

    if (!messageType) {
      // Unknown message type
      return;
    }
    log(
      LogLevel.DEBUG,
      `Received GC message from app ${appId} of type ${messageType}:`
    );
  });

  function getMessageType(type: number): string {
    // Search the enum values for one that matches the type
    let key = EMsg[type];

    if (key) return key;

    key = EGCCitadelClientMessages[type];

    if (key) return key;

    key = EGCBaseClientMsg[type];

    if (key) return key;

    return "";
  }

  client.on("refreshToken", (token: string) => {
    log(LogLevel.INFO, `Got a new token: ${token}`);
    // Write the token to a file, to be used to login the future
    fs.writeFile("token.txt", token, (err: unknown) => {
      if (err) {
        log(LogLevel.ERROR, String(err));
      }
    });
  });

  // Handle quitting events
  client.on("appQuit", (appId: number) => {
    log(LogLevel.INFO, `App ${appId} quit`);
  });

  client.on(
    "disconnected",
    (eresult: SteamUser.EResult, msg: string | undefined) => {
      log(LogLevel.INFO, `Disconnected from Steam: ${eresult} - ${msg}`);
    }
  );

  client.on("error", (err: Error) => {
    log(LogLevel.ERROR, String(err));
  });
}
