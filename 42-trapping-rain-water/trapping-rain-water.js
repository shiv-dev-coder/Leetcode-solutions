/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = new Array(height.length)
    let right = new Array(height.length)
    left[0] = height[0]
    right[height.length-1] = height[height.length-1]
    let maxleft = height[0]
    let maxright = height[height.length-1]
    for(let i = 1; i<height.length; i++){
        maxleft = Math.max(maxleft, height[i])
        left[i] = maxleft
    }
    for(let i = height.length-2; i>=0; i--){
        maxright = Math.max(maxright, height[i])
        right[i] = maxright
    }
    let ans = 0
    for(let i = 0; i< height.length; i++){
        ans += Math.min(left[i], right[i]) - height[i]
    }
    return ans

};