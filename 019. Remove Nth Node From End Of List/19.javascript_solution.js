/* 
    Solution: 
    Iterate through the linkedlist to find the length of the list using a counter len
    Edge case: If length of list is equal to n, then remove the first node and return head
    Otherwise, iterate through the list until you reach the nth node from the end (i.e. when len = n) 
    Remove the node by linking the prev node to the next node and setting the current node's next value to null
    Return the head

    Time Complexity: O(len) when len is length of linkedlist
    Space Complexity: O(1)
*/


const removeNthFromEnd = (head, n) => {
    let curr = head, len = 0, prev = null, next;
    while (curr) {
        curr = curr.next;
        len += 1;
    }

    if (len === n) {
        prev = head;
        head = head.next;
        prev.next = null;
        return head;
    }

    curr = head;

    while (len > n) {
        next = curr.next.next;
        prev = curr;
        curr = curr.next;
        len--;
    }

    prev.next = next;
    curr.next = null;
    return head;
};