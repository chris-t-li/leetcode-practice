/* 
    Solution:
    Iterate through the linked list and store the values in an array
    Using .slice, .reverse and spread syntax, reverse the elements of the array between position left and right
    Define a new linkedlist by creating new nodes with values corresponding to the values of each element in the revised array
    
    Time Complexity: O(Cn) where C is constant ~ O(n)
    Space Complexity: O(n)
*/


var reverseBetween = function (head, left, right) {
    const array = [];
    let current = head;
    while (current) {
        array.push(current.val);
        current = current.next;
    }
    const revBetweenArr = [...array.slice(0, left - 1), ...array.slice(left - 1, right).reverse(), ...array.slice(right)];

    let newLinkedList = new ListNode(revBetweenArr[0], null);
    let prev = newLinkedList;
    for (let i = 1; i < revBetweenArr.length; i++) {
        const newLink = new ListNode(revBetweenArr[i], null);
        prev.next = newLink;
        prev = newLink;
    }
    return newLinkedList;
};