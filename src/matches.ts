import SteamUser from "steam-user";
import {
  CMsgClientToGCGetMatchHistory,
  CMsgClientToGCGetMatchHistoryResponse,
  CMsgClientToGCGetMatchHistoryResponse_Match,
  EGCCitadelClientMessages,
} from "./proto/citadel_gcmessages_client";
import { log, LogLevel } from "./terminalUtils";

export class MatchRetriever {
  private matches: CMsgClientToGCGetMatchHistoryResponse_Match[] = [];
  private isDone: boolean = false;
  private batchCount: number = 0;

  constructor(
    private client: SteamUser,
    private appId: number
  ) {
    this.client = client;
    this.appId = appId;
  }

  public getMatches() {
    return this.matches;
  }

  public queryMatchHistory(continueCursor?: bigint) {
    // this.isDone = false;
    // Get our id
    const steamID = this.client.steamID;
    if (!steamID) {
      log(LogLevel.ERROR, "No SteamID");
      return;
    }

    // Match history request
    const matchHistoryRequest: CMsgClientToGCGetMatchHistory = {
      accountId: steamID.accountid,
    };

    if (continueCursor) {
      matchHistoryRequest.continueCursor = continueCursor;
    }

    // Let's get our match history
    log(LogLevel.DEBUG, `Requesting batch ${this.batchCount + 1}...`);
    this.client.sendToGC(
      this.appId,
      EGCCitadelClientMessages.k_EMsgClientToGCGetMatchHistory,
      {},
      Buffer.from(CMsgClientToGCGetMatchHistory.toBinary(matchHistoryRequest)),
      this.onGetMatchHistory.bind(this)
    );
  }

  private onGetMatchHistory(appId: number, type: number, body: Buffer) {
    this.batchCount++;
    log(LogLevel.DEBUG, `Got batch ${this.batchCount}... Processing...`);
    const matchHistory = CMsgClientToGCGetMatchHistoryResponse.fromBinary(body);

    // Add new matches to our list
    this.matches.push(...matchHistory.matches);

    if (!matchHistory.continueCursor) {
      log(LogLevel.DEBUG, "There is no continue cursor... We're done!");

      // Export matches
      this.isDone = true;
      return;
    }

    // Get next batch
    this.queryMatchHistory(matchHistory.continueCursor);
  }

  public isDoneRetrieving() {
    return this.isDone;
  }
}
