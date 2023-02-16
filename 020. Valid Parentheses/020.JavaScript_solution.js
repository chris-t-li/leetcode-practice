/* 
    Solution:
    Initialize empty array and object that contains closing brackets as keys and opening brackets as values
    Iterate through the string. If the character is an opening bracket (i.e. obj[char] is undefined), push it to the array
    Otherwise, if the last element of the array is equal to obj[char], remove the last element of the array (successfully closes the brackets)
    If you get to the end of the string and the arr has zero elements. Return true. otherwise false.

    Time Complexity: O(n)
    Space Complexity: O(n)
*/


var isValid = function (s) {
    const arr = [];
    const obj = { '}': '{', ')': '(', ']': '[' };

    for (const char of s) {
        if (!obj[char]) {
            arr.push(char);
        } else if (arr.slice(-1)[0] === obj[char]) {
            arr.pop();
        } else {
            arr.push(char);
        }
    }
    return arr.length === 0;
};