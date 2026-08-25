/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let n = Math.floor(Math.sqrt(c))
    let i = 0, j = n
    while(i<= j){
        if((i*i) + (j*j) == c) return true
        else if((i*i) + (j*j) > c) j--
        else i++
    }
    return false 
};