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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
    const q = [], result = [];
    q.push(root);
    result.push(root.val);

    while (q.length > 0) {
        const temp = [];
        const numOfNodes = q.length;
        for (let i = 0; i < numOfNodes; i++) {
            const node = q.shift();
            if (node.left) {
                q.push(node.left);
                temp.push(node.left.val);
            };
            if (node.right) {
                q.push(node.right);
                temp.push(node.right.val);
            };
        }
        if (temp.length > 0) {
            result.push((temp.reduce((a, c) => a + c, 0)) / temp.length)
        }
    }
    return result;
};