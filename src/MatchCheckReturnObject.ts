export enum FailReason {
  RankLow,
  RankHigh,
  Other
}
export class MatchCheckReturnObject {
  constructor(
    public readonly success: boolean,
    public readonly matchId: string,
    reason?: FailReason = FailReason.Other
  );
}
