/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let up = 0
    for(let i = 0; i< word.length; i++){
        let ch = word[i]
        if(ch === ch.toUpperCase()){
            up++
        }
    }
    return (up === 0 || up === word.length || (up === 1 && word[0] === word[0].toUpperCase()))
};