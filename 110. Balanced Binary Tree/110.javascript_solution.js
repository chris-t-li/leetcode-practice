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
 * @return {boolean}
 */
var isBalanced = function (root) {
    if (!root) return true;
    const maxLeft = depth(root.left);
    const maxRight = depth(root.right);
    const bool = Math.abs(maxLeft - maxRight) <= 1;

    return bool && isBalanced(root.left) && isBalanced(root.right)
};

const depth = (root) => {
    if (!root) return 0;
    const left = depth(root.left);
    const right = depth(root.right);
    return 1 + Math.max(left, right);
}