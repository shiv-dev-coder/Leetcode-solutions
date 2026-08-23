/**
 * @param {string} num
 * @return {boolean}
 */
var sumGame = function(num) {
    let n = num.length / 2
    let leftSum = 0, rightSum = 0
    let leftQue = 0, rightQue = 0
    for(let i = 0; i <n; i++){
        if(num[i] == "?") leftQue++
        else leftSum += Number(num[i])
    }
    for(let i = n; i <num.length; i++){
        if(num[i] == "?") rightQue++
        else rightSum += Number(num[i])
    }
    if((leftQue+rightQue)%2 != 0){
        return true
    }
    let diff = leftSum - rightSum
    let queDiff = rightQue - leftQue
    return diff !== (9 * queDiff / 2)
};