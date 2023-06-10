/**
 * @param {string} s
 * @return {number}
 */
const maxDepth = (s) => {
    const stk = [];
    let maxDepth = 0;

    for (const c of s) {
        if (c === "(") {
            stk.push(0);
            if (stk.length > maxDepth) {
                maxDepth = stk.length;
            }
        } else if (c === ")") {
            stk.pop();
        }
    };

    return maxDepth;

};