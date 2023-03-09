var isValidBST = function (root) {

    const dfs = (tree, result = []) => {
        if (!tree) return [];
        dfs(tree.left, result);
        result.push(tree.val);
        dfs(tree.right, result);
        return result;
    }

    const values = dfs(root);

    for (let i = 0; i < values.length; i++) {
        if (values[i] >= values[i + 1]) {
            return false
        }
    }
    return true;
};