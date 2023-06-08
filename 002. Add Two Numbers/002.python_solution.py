# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        new_list = ListNode(0)
        new_head = new_list
        sum = 0
        carry = 0

        while l1 or l2 or sum > 0:

            if l1:
                sum += l1.val
                l1 = l1.next
            
            if l2:
                sum += l2.val
                l2 = l2.next

            if sum >= 10:
                carry = 1
                sum -= 10
            
            new_head.next = ListNode(sum, None)
            new_head = new_head.next

            sum = carry
            carry = 0
    
        return new_list.next


