/**
 * Entrypoint
 */

import SteamUser from "steam-user";
import { collectCredentials } from "./lib/credentials";
import fs from "fs";
import { EMsg } from "./proto/enums_clientserver";
import {
  CMsgClientToGCGetMatchHistory,
  CMsgClientToGCGetMatchHistoryResponse,
  EGCCitadelClientMessages,
} from "./proto/citadel_gcmessages_client";
import { EGCBaseClientMsg } from "./proto/gcsystemmsgs";
import { MatchRetriever } from "./matches";
const client = new SteamUser();

// Fix BigInt -> JSON issue
(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

// =========================== Login to Steam ================================== \\
// ============================================================================= \\

function attemptLogin() {
  if (fs.existsSync("token.txt")) {
    console.log("Attempting login with token...");
    const token = fs.readFileSync("token.txt", "utf8");
    client.logOn({
      refreshToken: token,
    });
  } else {
    collectCredentials().then(
      (credentials: { accountName: any; password: any }) => {
        client.logOn({
          accountName: credentials.accountName,
          password: credentials.password,
        });
      },
    );
  }
}
attemptLogin();

// ============================= Steam Events ================================== \\
// ============================================================================= \\

// On Logging in, launch Deadlock
client.on("loggedOn", () => {
  console.log("Logged into Steam, launching Deadlock...");
  client.gamesPlayed([1422450]);
});

// Entry point
client.on("appLaunched", (appId: any) => {
  console.log(`Launched app ${appId}`);
  // Say hello to the GC
  client.sendToGC(appId, 4006, {}, Buffer.alloc(0));

  // Initiate match retrieval
  const matchRetriever = new MatchRetriever(client, appId);
  matchRetriever.getAllMyMatches();

  const checkIfComplete = setInterval(() => {
    if (matchRetriever.isDoneRetrieving()) {
      clearInterval(checkIfComplete);

      console.log("Match retrieval complete");
      // Exit the app
      client.gamesPlayed([]);
      process.exit();
    }
  }, 1000);
});

client.on("receivedFromGC", (appId: number, type: any, body: Buffer) => {
  // Search the EMsg enum values for one that matches the type
  // and get the key of that value
  const messageType = getMessageType(type);

  if (!messageType) {
    // Unknown message type
    return;
  }
  console.debug(
    `Received GC message from app ${appId} of type ${messageType}:`,
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

client.on("refreshToken", (token: any) => {
  console.log(`Got a new token: ${token}`);
  // Write the token to a file, to be used to login the future
  fs.writeFile("token.txt", token, (err: any) => {
    if (err) {
      console.error(err);
    }
  });
});

// Handle quitting events
client.on("appQuit", (appId: any) => {
  console.log(`App ${appId} quit`);
});

client.on("disconnected", (eresult: any, msg: any) => {
  console.log(`Disconnected from Steam: ${eresult} - ${msg}`);
});

client.on("error", (err: any) => {
  console.error(err);
});
