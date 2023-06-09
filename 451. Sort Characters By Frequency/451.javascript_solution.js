/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    const charObj = {};

    for (const c of s) {
        if (!charObj[c]) {
            charObj[c] = 1;
        } else {
            charObj[c] += 1;
        };
    };

    const charArr = Object.entries(charObj).sort((a, b) => b[1] - a[1]);

    let output = "";

    for (const arr of charArr) {
        output += arr[0].repeat(arr[1]);
    };

    return output;

};