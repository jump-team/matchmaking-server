enum FailReason {
  RankLow,
  RankHigh,
  Other
}

class ReturnObject {
  constructor(
    public readonly success: boolean,
    reason?: FailReason = FailReason.Other
  );
}
export FailReason;
export ReturnObject as MatchCheckReturnObject;
