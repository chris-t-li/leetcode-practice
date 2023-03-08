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
var preorderTraversal = function (root, result = []) {
    // base case
    if (root === null) return [];
    // recursive calls
    result.push(root.val);
    preorderTraversal(root.left, result);
    preorderTraversal(root.right, result);

    return result;
};