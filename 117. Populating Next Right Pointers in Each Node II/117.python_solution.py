class Solution:
    def connect(self, root: 'Node') -> 'Node':
        if not root:
            return root

        queue = [root]

        while len(queue) != 0:
            num_of_nodes = len(queue)
            prev_node = None

            for i in range(num_of_nodes):
                curr_node = queue.pop(0)
                if prev_node:
                    prev_node.next = curr_node
                
                prev_node = curr_node

                if curr_node.left:
                    queue.append(curr_node.left)
                
                if curr_node.right:
                    queue.append(curr_node.right)
        
        return root
