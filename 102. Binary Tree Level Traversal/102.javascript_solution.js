/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (root === null) return [];
    const result = [];
    //create a queue;
    const queue = [];
    // add the root node to the queue
    queue.push(root);
    result.push([root.val])
    // while queue is not empty
    while (queue.length !== 0) {
        const numOfNodesOnLevel = queue.length;
        const nodesOnLevel = [];
        for (let i = 0; i < numOfNodesOnLevel; i++) {
            // dequeue a node
            const node = queue.shift();
            // if node has a left node
            if (node.left) {
                // add node to the queue
                queue.push(node.left);
                nodesOnLevel.push(node.left.val)
            }
            // if node has right node
            if (node.right) {
                queue.push(node.right);
                nodesOnLevel.push(node.right.val)
            }
        }
        if (nodesOnLevel.length > 0) {
            result.push(nodesOnLevel);
        }

    }
    return result;
};