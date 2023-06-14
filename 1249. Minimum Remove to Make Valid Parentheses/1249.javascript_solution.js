/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
    const stk = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stk.push([i, "("])
        } else if (s[i] === ")" && stk.length > 0 && stk[stk.length - 1][1] === "(") {
            stk.pop();
        } else if (s[i] === ")") {
            stk.push([i, ")"])
        }
    }
    while (stk.length > 0) {
        const [charIndex, _] = stk.pop();
        s = s.substring(0, charIndex) + s.substring(charIndex + 1);
    }
    return s;
};