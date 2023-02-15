const sortColors = (nums) => {
    const obj = {};
    for (const num of nums) {
        obj[num] ? obj[num]++ : obj[num] = 1;
    }
    for (let i = 0; i < nums.length; i++) {
        if (obj['0']) {
            nums[i] = 0,
                obj['0']--;
        } else if (obj['1']) {
            nums[i] = 1,
                obj['1']--;
        } else {
            nums[i] = 2,
                obj['2']--
        }
    }
    console.log(obj, nums)
    return nums;
};