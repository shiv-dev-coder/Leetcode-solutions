/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if(s.length != goal.length) return false
    let concated = s+s
    if(concated.includes(goal)) return true
    else return false
};