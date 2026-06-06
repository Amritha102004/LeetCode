/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    let stack =[]
    let count = 0
    for(let i=0;i<s.length;i++){
        if(s[i]=="("){
            stack.push(s[i])
            if(count<stack.length) count=stack.length
        }
        else if(s[i]==")"){
            stack.pop()
        }
    }
    return count
};