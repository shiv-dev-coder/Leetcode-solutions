/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let new_arr =  []
    arr.forEach((v, i)=>{
        if(fn(v, i)) new_arr.push(v)
    })
    return new_arr
};