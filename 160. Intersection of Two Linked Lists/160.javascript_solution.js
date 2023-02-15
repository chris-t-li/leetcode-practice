/* 
    Solution:
    Iterate through each of the two linked lists to determine their respective lengths m and n
    If there is an intersection between the two lists, if you line up the list starting from their tails, the first node that is common between both lists is the intersection
    If m > n, then iterate along linkedList with headA until m is equal to n (or vice versa for headB if n > m)
    From there, iterate along both linked lists and test if each node is equal. If they are, return that node as being the first intersection of the list. 
    If you get to the end of both lists and none of the nodes were equal, then the lists do not intersect and return null.

    Time Complexity: O(m + n)
    Space Complexity: O(1)
    
*/

const getIntersectionNode = (headA, headB) => {
    let m = 0, n = 0, currA = headA, currB = headB;
    while (currA) {
        currA = currA.next;
        m += 1;
    }
    while (currB) {
        currB = currB.next;
        n += 1;
    }

    currA = headA;
    currB = headB;

    if (m > n) {
        while (m > n) {
            currA = currA.next;
            m--;
        }
    } else if (m < n) {
        while (m < n) {
            currB = currB.next;
            n--;
        }
    }

    while (currA) {
        if (currA === currB) {
            return currA;
        }
        currA = currA.next;
        currB = currB.next;
    }

    return null;
};