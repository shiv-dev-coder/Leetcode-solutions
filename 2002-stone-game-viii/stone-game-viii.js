/**
 * @param {number[]} stones
 * @return {number}
 */
var stoneGameVIII = function(stones) {
    let prefix = new Array(stones.length);

    prefix[0] = stones[0];

    for (let i = 1; i < stones.length; i++) {
        prefix[i] = prefix[i - 1] + stones[i];
    }

    let dp = prefix[stones.length - 1];

    for (let i = stones.length - 2; i >= 1; i--) {
        dp = Math.max(dp, prefix[i] - dp);
    }

    return dp;
};