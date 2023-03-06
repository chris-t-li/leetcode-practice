
var largestNumber = function (nums) {
    // insertion sort
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j <= i; j++) {
            if ("" + nums[i] + nums[j] > "" + nums[j] + nums[i]) {
                [nums[i], nums[j]] = [nums[j], nums[i]]
            }
        }
    }
    // dealing with edge case if there are leading zeros
    if (nums[0] === 0) {
        let ind = 0;
        while (nums[ind] === 0) {
            ind++;
        }
        return nums.slice(ind - 1).join("");
    }
    return nums.join("");
};