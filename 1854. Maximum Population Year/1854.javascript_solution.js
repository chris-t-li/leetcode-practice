/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function (logs) {
    const arr = new Array(101).fill(0);

    for (const [y1, y2] of logs) {
        arr[y1 - 1950] += 1;
        arr[y2 - 1950] -= 1;
    };

    let pop = 0, maxPop = 0, year = 0;
    for (let i = 0; i <= 101; i++) {
        if (arr[i] !== 0) {
            pop += arr[i];
            if (pop > maxPop) {
                maxPop = pop;
                year = 1950 + i;
            };
        };
    };

    return year;
};