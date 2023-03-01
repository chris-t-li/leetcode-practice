class Solution:
    def insertIntoBST(self, root: Optional[TreeNode], val: int) -> Optional[TreeNode]:
        newNode = TreeNode(val)
        if not root:
            return newNode
        curr = root

        while curr:
            if val < curr.val:
                if not curr.left:
                    curr.left = newNode
                    return root
                curr = curr.left
            else:
                if not curr.right:
                    curr.right = newNode
                    return root
                curr = curr.right
