/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
    const evenOdd = [0, 0];
    for (const num of position) {
        if (num % 2 === 0) {
            evenOdd[0] += 1;
        } else {
            evenOdd[1] += 1;
        }
    }
    return Math.min(...evenOdd)
};