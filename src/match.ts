import * as objectId from "bson-objectid";

export class Match {
  private averageRank: number;
  constructor(public readonly players: number) {
    return;
  }
  public isGoodMatch(rank: number, range: number) {
    // Checks if a match is good for the specific rank
    let lowest: number = this.averageRank - range;
    let highest: number = this.averageRank + range;
    if (rank >= lowest && rank <= highest) {
      // Match works
    }
  }
}
