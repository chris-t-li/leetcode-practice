/* 
    Solution: 
    Using recursion.
    Test if the element at the middle of the array is equal to the target. If so, return the middle index
    If the middle element is greater than the target, recursively call the search function with the first half of the array. 
    If the middle element is less than the target, recursively call the search function with the second half ot he array
    Add a third parameter being the index and a default value initially of 0. For each recursive call, if the target is to the left of the middle, then keep the index (the zeroth index of the num array within the execution context of the current recursive call).
    If the target is to the right of the middle, then offset the index by adding middle for the recursive call.
    The base case is if the middle index of the num array is equal to target. Or, if the middle is falsy (i.e. zero) then the target does not exist in the array nums and return -1

    Time Complexity: O(log n)
    Space Complexity: O(log n)
*/

function search(nums, target, index = 0) {
    const len = nums.length, middle = Math.floor(len / 2);

    if (nums[middle] === target) return middle + index;
    if (!middle) return -1;

    if (nums[middle] > target) {
        return search(nums.slice(0, middle), target, index);
    } else {
        return search(nums.slice(middle), target, index + middle);
    }
};