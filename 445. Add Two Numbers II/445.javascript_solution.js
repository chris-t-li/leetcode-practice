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
var addTwoNumbers = function (l1, l2) {
    let l1Rev = reverseList(l1);
    let l2Rev = reverseList(l2);
    const sumList = new ListNode(0, null);
    let curr = sumList;
    let sum = 0, carry = 0;
    while (l1Rev || l2Rev || carry > 0) {
        if (carry === 1) {
            sum += 1;
            carry = 0;
        }
        if (l1Rev) {
            sum += l1Rev.val;
            l1Rev = l1Rev.next;
        }
        if (l2Rev) {
            sum += l2Rev.val;
            l2Rev = l2Rev.next;
        }
        if (sum > 9) {
            sum -= 10;
            carry = 1;
        }
        const newNode = new ListNode(sum, null);
        sum = 0;
        curr.next = newNode;
        curr = curr.next;
    }
    return reverseList(sumList.next);
};

const reverseList = (llist) => {
    let curr = llist, prev = null, next;
    while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}