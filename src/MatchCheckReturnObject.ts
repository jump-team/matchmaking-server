enum FailReason {
  RankLow,
  RankHigh,
  Other
}
export FailReason as FailReason;
class ReturnObject {
  constructor(
    public readonly success: boolean,
    public readonly matchId: string,
    reason?: FailReason = FailReason.Other
  );
}
export ReturnObject as MatchCheckReturnObject;
