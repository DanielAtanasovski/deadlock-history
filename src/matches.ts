import SteamUser from "steam-user";
import {
  CMsgClientToGCGetMatchHistory,
  CMsgClientToGCGetMatchHistoryResponse,
  CMsgClientToGCGetMatchHistoryResponse_Match,
  EGCCitadelClientMessages,
} from "./proto/citadel_gcmessages_client";
import * as fs from "fs";

export class MatchRetriever {
  private matches: CMsgClientToGCGetMatchHistoryResponse_Match[] = [];
  private matchIDs: bigint[] = [];
  private isDone: boolean = false;
  private batchCount: number = 0;

  constructor(
    private client: SteamUser,
    private appId: number,
  ) {
    this.client = client;
    this.appId = appId;
  }

  public getAllMyMatches(continueCursor?: bigint) {
    // Get our id
    const steamID = this.client.steamID;
    if (!steamID) {
      console.error("No SteamID");
      return;
    }

    // Match history request
    const matchHistoryRequest: CMsgClientToGCGetMatchHistory = {
        accountId: steamID.accountid,
    }

    if (continueCursor) {
        matchHistoryRequest.continueCursor = continueCursor;
    }

    // Let's get our match history
    const oldBatchCount = this.batchCount;
    console.log(`Requesting batch ${this.batchCount + 1}...`);
    this.client.sendToGC(
      this.appId,
      EGCCitadelClientMessages.k_EMsgClientToGCGetMatchHistory,
      {},
      Buffer.from(
        CMsgClientToGCGetMatchHistory.toBinary(matchHistoryRequest),
      ),
      this.onGetMatchHistory.bind(this),
    );
  }

  private onGetMatchHistory(appId: number, type: any, body: Buffer) {
    this.batchCount++;
    console.log(`Got batch ${this.batchCount}... Processing...`);
    const matchHistory = CMsgClientToGCGetMatchHistoryResponse.fromBinary(body);

    // Get all match IDs
    const batchMatchIDs = matchHistory.matches
      .map((match) => match.matchId)
      .filter((matchID) => matchID !== undefined);

    // If all match IDs are already in our list, we're done
    if (
      batchMatchIDs.every(
        (matchID) => matchID !== undefined && this.matchIDs.includes(matchID),
      )
    ) {
      console.log(`No new matches... We're done!`);

      // Export matches
      fs.writeFileSync("matches.json", JSON.stringify(this.matches, null, 4));
      this.isDone = true;
      return;
    }

    // Add new matches to our list
    this.matches.push(...matchHistory.matches);
    this.matchIDs.push(...batchMatchIDs);

    // Get the next batch
    this.getAllMyMatches(matchHistory.continueCursor);
  }

  public isDoneRetrieving() {
    return this.isDone;
  }
}
