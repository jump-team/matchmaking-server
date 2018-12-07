import * as objectId from "bson-objectid";
import {
  MatchCheckReturnObject as ReturnObject,
  FailReason
} from "./MatchCheckReturnObject";
import { Player } from "./player";

export enum MatchType {
  Standard,
  Pro,
  Mega
}

export class Match {
  private averageRank: number;
  public readonly id: string;
  public readonly maxPlayers: number = 100;
  constructor(public readonly players: Player[]) {
    this.id = objectId.generate();
  }
  public isGoodMatch(rank: number, range: number) {
    // Checks if a match is good for the specific rank
    let lowest: number = this.averageRank - range;
    let highest: number = this.averageRank + range;
    let returnObject;
    if (rank >= lowest && rank <= highest && this.maxPlayers > players.length) {
      // Match works
      returnObject = new ReturnObject(true, this.id);
    } else {
      let returnObject;
      if (rank < lowest) {
        returnObject = new ReturnObject(false, FailReason.RankLow);
      } else if (rank > highest) {
        returnObject = new ReturnObject(false, FailReason.RankHigh);
      } else if (players.length > this.maxPlayers) {
        returnObject = new ReturnObject(false, FailReason.MaxPlayersReached);
      } else {
        returnObject = new ReturnObject(false, FailReason.Other);
      }
    }
    return returnObject;
  }
}

export class NormalMatch extends Match {
  maxPlayers = 12;
  public readonly matchType: MatchType = MatchType.Standard;
}

export class ProMatch extends Match {
  maxPlayers = 12;
  public readonly matchType: MatchType = MatchType.Pro;
}

export class MegaMatch extends Match {
  maxPlayers = 50;
  public readonly matchType: MatchType = MatchType.Mega;
}
