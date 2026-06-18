/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let r={"I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000}
    let n=[]
    for(c of s){
        n.push(r[c])
    }
    let res=0
    for(let i=0;i<n.length;i++){
       if(n[i+1] >n[i]){
           res += n[i+1]-n[i]
           i++
       }else{
        res += n[i]
       }
    }
    return res
};