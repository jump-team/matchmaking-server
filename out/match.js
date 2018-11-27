"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Match = /** @class */ (function () {
    function Match(players) {
        this.players = players;
        return;
    }
    Match.prototype.isGoodMatch = function (rank, range) {
        // Checks if a match is good for the specific rank
        var lowest = this.averageRank - range;
        var highest = this.averageRank + range;
        if (rank >= lowest && rank <= highest) {
            // Match works
        }
    };
    return Match;
}());
exports.Match = Match;
//# sourceMappingURL=match.js.map