/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var shortestBeautifulSubstring = function(s, k) {
    let i = 0
    let ans = ""
    let count = 0
    for (let j = 0; j < s.length; j++) {
    if (s[j] === "1") count++

    while (count > k) {
        if (s[i] === "1") count--
        i++
    }

    if (count === k) {
        while (s[i] === "0") {
            i++
        }

        let temp = s.slice(i, j + 1)

        if (!ans ||
    temp.length < ans.length ||
    (temp.length === ans.length && temp < ans)) {
            ans = temp
        }
    }
}

return ans
};