/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    if (nums.length === 1) return true;
    let pos = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] + i > pos) {
            pos = nums[i] + i;
        }
        if (nums[i] === 0) {
            if (pos <= i) {
                return false;
            }
        }
    }
    return pos >= (nums.length - 1);
};