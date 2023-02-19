/*
    Solution:
    Declare two variables, one to store the result as a number, the other as a hash that maps each roman numeral to its corresponding numerical value.
    Iterate through the string. If the value of the next character exceeds the value of the current character, decrement result by current character's numerical value. 
    Otherwise, increment result by currect character's numerical value.
    Return the result at the end of the loop.

    Time Complexity: O(n)
    Space Complexity: O(1)
*/


var romanToInt = function (s) {
    let result = 0;
    const roman = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 }

    for (let i = 0; i < s.length; i++) {
        if (roman[s[i + 1]] > roman[s[i]]) {
            result -= roman[s[i]]
        } else {
            result += roman[s[i]]
        }
    }
    return result;
};