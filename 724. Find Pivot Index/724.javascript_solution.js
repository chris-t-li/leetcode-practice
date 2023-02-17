/* 
    Solution:
    Define 3 variables - index, leftSum and rightSum. Index and leftSum start at zero. Rightsum is the sum of all elements to the right of the zero index.
    Iterate through the array. If leftSum equals rightSum return index. Otherwise, increment leftSum by the element at i and decrement rightSum by the element at i + 1.
    If you get to the end of the array, return -1

    Time Complexity: O(2n) ~ O(n)
    Space Complexity: O(1)
*/

const pivotIndex = (nums) => {
    let index = 0, leftSum = 0, rightSum = nums.reduce((a, c) => a + c) - nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (leftSum === rightSum) {
            return index;
        }
        leftSum += nums[i]
        rightSum -= nums[i + 1]
        index++
    }

    return -1;

};