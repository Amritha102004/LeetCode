/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let tree1=[]
    let tree2=[]
    if(p && q){
        tree1.push(p)
        tree2.push(q)
    }else if(p || q){
        return false
    }

    while(tree1.length && tree2.length){
        let val1=tree1.shift()
        let val2=tree2.shift()
        if(val1.val != val2.val) return false
        if(val1.left!=null && val2.left!=null){
            tree1.push(val1.left)
            tree2.push(val2.left)
        }else if(val1.left!=null || val2.left!=null){
            return false 
        }
        if(val1.right!=null && val2.right!=null){
            tree1.push(val1.right)
            tree2.push(val2.right)
        }else if(val1.right!=null || val2.right!=null){
            return false 
        }
    }
    if(tree1.length || tree2.length) return false
    return true
};