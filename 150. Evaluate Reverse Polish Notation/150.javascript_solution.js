var evalRPN = function (tokens) {
    const stack = [];
    for (const char of tokens) {
        switch (char) {
            case "+":
                stack[stack.length - 2] += stack[stack.length - 1];
                stack.pop();
                break;
            case "-":
                stack[stack.length - 2] -= stack[stack.length - 1];
                stack.pop();
                break;
            case "*":
                stack[stack.length - 2] *= stack[stack.length - 1];
                stack.pop();
                break;
            case "/":
                const value = stack[stack.length - 2] / stack[stack.length - 1];
                stack[stack.length - 2] = value < 0 ? Math.ceil(value) : Math.floor(value);
                stack.pop();
                break;
            default:
                stack.push(parseInt(char));
        }
    }
    return stack[0];
};