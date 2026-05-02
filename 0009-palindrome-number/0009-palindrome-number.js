/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false
    let r = 0;
    let o = x;

    while (x > 0) {
        let d = x % 10;
        r = r * 10 + d;
        x = Math.floor(x / 10);
    }
    return r === o
};