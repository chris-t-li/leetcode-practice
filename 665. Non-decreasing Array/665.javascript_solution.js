var checkPossibility = function (nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            const temp = nums[i];
            nums[i] = nums[i + 1];
            const check1 = checkNonDecreasing(nums);

            nums[i] = temp;
            nums[i + 1] = temp;
            const check2 = checkNonDecreasing(nums);

            return check1 || check2
        }
    }
    return true;
};

const checkNonDecreasing = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            return false;
        }
    }
    return true;
}