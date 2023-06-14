/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
const connect = (root) => {
    if (root === null) return root;
    const queue = [root];

    while (queue.length > 0) {
        const numOfNodes = queue.length;
        let prevNode = null;

        for (let i = 0; i < numOfNodes; i++) {
            const currNode = queue.shift();
            if (prevNode) {
                prevNode.next = currNode;
            }
            prevNode = currNode;

            if (currNode.left) {
                queue.push(currNode.left);
            }
            if (currNode.right) {
                queue.push(currNode.right);
            }

        }
    };
    return root;

};