var searchInsert = function (nums, target) {
    let left = 0, right = nums.length

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};