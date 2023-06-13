/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
    const stk = [];
    for (let i = 0; i < s.length; i++) {
        if (stk.length === 0) {
            stk.push([s[i], 1])
        } else if (stk[stk.length - 1][0] !== s[i]) {
            stk.push([s[i], 1]);
        } else if (stk[stk.length - 1][0] === s[i] && stk[stk.length - 1][1] === k - 1) {
            stk.pop();
        } else if (stk[stk.length - 1][0] === s[i]) {
            stk[stk.length - 1][1] += 1;
        }
    }

    let string = "";
    for (const c of stk) {
        string += c[0].repeat(c[1]);
    }

    return string;
};