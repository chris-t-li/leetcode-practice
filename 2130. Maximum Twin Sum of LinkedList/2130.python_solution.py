class Solution:
    def pairSum(self, head: Optional[ListNode]) -> int:

        # traverse through the linkedlist to find the number of nodes, n and the middle index of the linkedlist
        current = head
        count = 0
        while current:
            count += 1
            current = current.next

        middleIndex = int(count / 2 - 1)
        currentNode = head
        prevNode = None

        # reverse the first half of the linkedlist (until the middleindex)
        while middleIndex >= 0:
            nextNode = currentNode.next
            currentNode.next = prevNode
            prevNode = currentNode
            currentNode = nextNode
            middleIndex -= 1

        # declare a variable equal to the max Twin Sum. Traverse through the reversed first half of linkedlist and the second half of the original linkedlist. If the sum of the values of each node exceeds the maxTwinSum, assign the sum to the variable and return the varaible value at end of traversal
        reversedFirstHalfList = prevNode
        secondHalfList = currentNode
        maxTwinSum = 0

        while secondHalfList:
            if secondHalfList.val + reversedFirstHalfList.val > maxTwinSum:
                maxTwinSum = secondHalfList.val + reversedFirstHalfList.val
            reversedFirstHalfList = reversedFirstHalfList.next
            secondHalfList = secondHalfList.next

        return maxTwinSum
