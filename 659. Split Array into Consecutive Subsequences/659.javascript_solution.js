/*
    1. Iterate through nums to get count of each number. Store as object
    2. Iterate through nums again, if you can add the number to an end, decrement that end by one, and increment the next end by one. Otherwise, if the next two consecutive numbers exist. Decrement the counts by one. And increment the end by 1.
    3. If num is not in count, that means its been visited already from a prev step so continue;
    4. If you are unable to perform any of the operations in the loop, return false, if you get to end of loop, return true
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function (nums) {
    const freqNums = {};
    for (const num of nums) {
        if (!freqNums[num]) {
            freqNums[num] = 1;
        } else {
            freqNums[num] += 1;
        }
    }
    const ends = {};
    for (let i = 0; i < nums.length; i++) {
        if (!freqNums[nums[i]]) {
            continue;
        }
        freqNums[nums[i]] -= 1;

        if (ends[nums[i]]) {
            ends[nums[i]] -= 1;
            ends[nums[i] + 1] ? ends[nums[i] + 1] += 1 : ends[nums[i] + 1] = 1;
        } else if (freqNums[nums[i] + 1] && freqNums[nums[i] + 2]) {
            freqNums[nums[i] + 1] -= 1;
            freqNums[nums[i] + 2] -= 1;
            ends[nums[i] + 3] ? ends[nums[i] + 3] += 1 : ends[nums[i] + 3] = 1;
        } else {
            return false;
        }
    }
    return true;
};