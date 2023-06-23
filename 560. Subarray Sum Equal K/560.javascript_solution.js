var subarraySum = function (nums, k) {
    let count = 0, sum = 0, prefix = { 0: 1 };
    for (const num of nums) {
        sum += num;
        count += (prefix[sum - k] || 0);
        prefix[sum] ? prefix[sum] += 1 : prefix[sum] = 1;
    }
    return count;
};