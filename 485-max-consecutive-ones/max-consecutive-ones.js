/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxlen = 0
    let cur = 0
    for(let i = 0; i< nums.length; i++){
        if(nums[i] == 1){
            cur++
            maxlen = Math.max(cur, maxlen)
        }else cur = 0
    }
    return maxlen
};