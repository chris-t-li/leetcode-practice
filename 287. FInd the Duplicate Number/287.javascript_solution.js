/* 
    Solution: 
    Declare a variable and assign it an empty object that will store the integers as keys as you iterate through the array nums
    Iterate through the array nums, at each iteration, if the number exists in the object as a key, return that num as the duplicate
    Otherwise store that num as a key in the object
    The below will guarantee a solution given the constraints. It is guaranteed that there will be one duplicate integer.

    Time Complexity: O(n)
    Space Complexity: O(1)
*/


var findDuplicate = function (nums) {
    const numObj = {};
    for (const num of nums) {
        if (numObj[num]) {
            return num
        } else {
            numObj[num] = true;
        }
    }
};