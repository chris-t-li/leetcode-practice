/*
    Solution: 
    Copy the nums array
    Iterate through the array. The element at index i + k (mod length of array) shall be the element at index i

    Time Complexity: O(n)
    Space Complexity: O(1)
*/

const rotate = (nums, k) => {
    const temp = [...nums];
    for (let i = 0; i < nums.length; i++) {
        nums[(i + k) % nums.length] = temp[i];
    }
};