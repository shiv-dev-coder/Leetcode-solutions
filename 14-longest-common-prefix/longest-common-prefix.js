/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let str = ""
    for(let i = 0; i< strs[0].length; i++){
        let ref = strs[0][i]
        for(let j = 0; j< strs.length; j++){
           if(i>=strs[j].length || strs[j][i] != ref) return str
        }
        str+=ref
    }
    return str
};