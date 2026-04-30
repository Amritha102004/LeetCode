/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(!head){
        return
    }
    function reverse(head){
        let prev=null
        let curr=head
        while(curr){
            let next=curr.next
            curr.next=prev
            prev=curr
            curr=next
        }
        return prev
    }
    head=reverse(head)
    if(n===1){
        head=head.next
        return reverse(head)
    }
    curr=head
    for(i=1;i<n-1;i++){
            curr=curr.next
    }
    curr.next=curr.next.next
    return reverse(head)
    
};