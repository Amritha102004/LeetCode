/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let res=[]
    for (let i=0;i<nums.length;i++){
         res.push(...nums[i].toString().split(""))
    }
    return res.map(a => Number(a))
};