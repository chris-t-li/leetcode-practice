/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    const stack = [];
    for (const char of s) {
        if (char !== "]") {
            stack.push(char);
        } else {
            let subStr = "";
            while (stack[stack.length - 1] !== "[") {
                subStr = stack.pop() + subStr;
            }
            stack.pop();
            let k = "";
            while (stack.length > 0 && !isNaN(stack[stack.length - 1])) {
                k = stack.pop() + k;
            }
            for (let i = 0; i < k; i++) {
                stack.push(subStr);
            }
        }
    }
    return stack.join("");
};