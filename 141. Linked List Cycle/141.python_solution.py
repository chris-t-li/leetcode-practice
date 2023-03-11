class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        linkedlist = set()
        while head:
            if head in linkedlist:
                return True
            linkedlist.add(head)
            head = head.next

        return False
