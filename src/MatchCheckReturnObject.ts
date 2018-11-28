enum FailReason {
  RankLow,
  RankHigh,
  Other
}

class ReturnObject {
  constructor(
    public readonly success: boolean,
    public readonly matchId: string,
    reason?: FailReason = FailReason.Other
  );
}
export FailReason as FailReason;
export ReturnObject as MatchCheckReturnObject;
