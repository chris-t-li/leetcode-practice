var insertIntoBST = function (root, val) {

    const newNode = new TreeNode(val);
    if (!root) return newNode;
    let curr = root;

    while (curr) {
        if (val < curr.val) {
            if (!curr.left) {
                curr.left = newNode;
                return root;
            }
            curr = curr.left;
        } else {
            if (!curr.right) {
                curr.right = newNode;
                return root;
            }
            curr = curr.right;
        }
    }
};