/*
    Solution: 
    Define a new singly linked list
    The value of each node in the new list shall be incremented by the value of each node in the respective l1 and l2 linked lists, if the node exists along with any carry value.
    If the sum exceeds 10, the value shall be the difference between the sum and 10 and carry shall equal one
    At the end of each iteration, reset carry equal to 0
    Create a new node for the next iteration and link it created linked list
    At the end of the iteration, return the head of the new link list

    Time Complexity: O(n + m) where n is size of l1 and m is size of l2
    Space Complexity: O(n + C) where C is constant ~ O(n)
*/


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

const addTwoNumbers = (l1, l2) => {
    let newListNode = new ListNode(0);
    let headOfNewListNode = newListNode;
    let sum = 0;
    let carry = 0;

    while (l1 || l2 || sum > 0) {
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }

        if (sum >= 10) {
            carry = 1;
            sum -= 10;
        }

        headOfNewListNode.next = new ListNode(sum);
        headOfNewListNode = headOfNewListNode.next;

        sum = carry;
        carry = 0;
    }
    return newListNode.next;
};