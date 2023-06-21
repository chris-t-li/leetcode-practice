/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function (n) {
    // define constant MOD
    const MOD = 1000000007;
    // return base case
    if (n === 1) return 10;
    // define object that maps key (previous dialed number) to value (array of possible next numbers)
    const numMap = {
        0: [4, 6],
        1: [6, 8],
        2: [7, 9],
        3: [4, 8],
        4: [3, 9, 0],
        5: [],
        6: [0, 1, 7],
        7: [2, 6],
        8: [1, 3],
        9: [2, 4],
    };
    // numCount is the number of paths to each number for n > 1
    let numCount = [1, 1, 1, 1, 1, 0, 1, 1, 1, 1]
    for (let i = 2; i <= n; i++) {
        // declare temp variable to store number of paths to each number 
        const temp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        const valids = [0, 1, 2, 3, 4, 6, 7, 8, 9];
        valids.forEach(val => {
            const nextNums = numMap[val];
            for (let j = 0; j < nextNums.length; j++) {
                temp[nextNums[j]] += numCount[val];
            }
            temp[val] %= MOD
        });
        numCount = temp;
    };
    return Object.values(numCount).reduce((a, c) => a + c) % MOD;
};