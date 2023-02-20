var removeDuplicates = function (s) {
    const stack = [];
    let i = 0;

    while (s[i]) {
        stack[stack.length - 1] === s[i] ? stack.pop() : stack.push(s[i]);
        i++;
    }

    return stack.join("");
};