/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {
    const stk = [];
    let score = 0;
    for (const p of s) {
        if (p === "(") {
            stk.push(score);
            score = 0;
        } else {
            score = stk.pop() + Math.max(score * 2, 1);
        }

    };
    return score;
};