/**
 * @param {number[]} coins
 * @param {number} k
 * @return {number}
 */
var findKthSmallest = function(coins, k) {
    let left = 1;
    let right = Math.min(...coins) * k;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        let count = 0;

       
        function dfs(index, lcm, bits) {
            if (index === coins.length) {
                if (bits === 0) return;

                let amount = Math.floor(mid / lcm);

                if (bits % 2 === 1) {
                    count += amount;
                } else {
                    count -= amount;
                }

                return;
            }

            dfs(index + 1, lcm, bits);

            let newLcm = lcm / gcd(lcm, coins[index]) * coins[index];

            if (newLcm <= mid) {
                dfs(index + 1, newLcm, bits + 1);
            }
        }

        function gcd(a, b) {
            while (b !== 0) {
                let temp = a % b;
                a = b;
                b = temp;
            }
            return a;
        }

        dfs(0, 1, 0);

        if (count >= k) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};