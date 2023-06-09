/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    const charObj = {};

    for (const char of s) {
        if (!charObj[char]) {
            charObj[char] = 1;
        } else {
            charObj[char] += 1;
        };
    };

    for (let i = 0; i < s.length; i++) {
        if (charObj[s.charAt(i)] === 1) {
            return i;
        };
    };

    return -1;
};