export enum FailReason {
  MaxPlayersReached,
  RankLow,
  RankHigh,
  Other
}
export class MatchCheckReturnObject {
  constructor(
    public readonly success: boolean,
    public readonly matchId?: string,
    public readonly reason?: FailReason
  ) {
    if (!this.reason && this.success === false) {
      this.reason = FailReason.Other;
    }
  }
}
