/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let result = new ListNode();
    let head = result;
    let carry = 0;
    while(l1 || l2 || carry > 0){
        let l1Val = 0;
        let l2Val = 0;
        if(l1){
            l1Val = l1.val
            l1 = l1.next;
        }
        if(l2){
            l2Val = l2.val
            l2 = l2.next;
        }
        let sum = l1Val + l2Val + carry;
        carry = Math.floor(sum /10)
        let value = sum % 10;   
        let newNode = new ListNode(value);
        result.next = newNode;
        result = result.next;
    }
    return head.next;
};

// runtime complexity: O(Max(m,n)) the number of iterations of the while loop is determined by the length of longer list 
// space complexity: O(Max(m,n)) the length of result list depends on the size of the input lists 