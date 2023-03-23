const sortArrayByParity = (nums) => {
    const results = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2) {
            results.push(nums[i])
        } else {
            results.unshift(nums[i])
        }
    }
    return results;
};