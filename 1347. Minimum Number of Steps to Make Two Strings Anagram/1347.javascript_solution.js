/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
    const sObj = {}, tObj = {};
    for (let i = 0; i < s.length; i++) {
        if (!sObj[s[i]]) {
            sObj[s[i]] = 1;
        } else {
            sObj[s[i]] += 1;
        }

        if (!tObj[t[i]]) {
            tObj[t[i]] = 1;
        } else {
            tObj[t[i]] += 1;
        }
    };

    let numOfCommonChars = 0;
    const sObjKeys = Object.keys(sObj);
    for (const key of sObjKeys) {
        if (tObj[key]) {
            numOfCommonChars += Math.min(sObj[key], tObj[key]);
        }
    }
    return s.length - numOfCommonChars;
};

