/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let n=x.toString()
    for(let i=0;i<=n.length/2;i++){
      if(n[i]!=n[n.length-i-1]){
        return false
      }
    }
    return true
};