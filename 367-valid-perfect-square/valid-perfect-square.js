/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
   let i = 0, j = num
   while(i<=j){
    let mid = Math.floor((i+j)/2)
    if((mid*mid) == num) return true
    else if((mid*mid)>num) j= mid -1
    else i = mid+1
   }
   return false
};