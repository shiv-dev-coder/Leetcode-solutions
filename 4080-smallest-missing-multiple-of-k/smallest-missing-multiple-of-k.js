/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function(nums, k) {
    let set = new Set(nums)
    i = k
    while(true){
        if(!set.has(i)) return i
        else i+=k
    }
};