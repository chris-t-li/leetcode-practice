/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    let longestSubString = 0;
    let i = 0, j = 0;

    while (i <= s.length && j <= s.length) {
        const set = new Set(s.substring(i, j));

        if (set.size === j - i) {
            if (j - i > longestSubString) {
                longestSubString = j - i;
            };
            j++;
        } else {
            i++;
            j = i + longestSubString;
        };
    };

    return longestSubString;
};
