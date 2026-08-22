/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function(n) {
  
  
  
    let sum = 0
    let product = 1
    let n_copy = n
    while(n_copy >0){
    let rem = n_copy % 10
    sum+= rem
    product *= rem
    n_copy = Math.floor(n_copy/10)
  }
  if(n % (sum + product) == 0) return true
  else return false
  

};