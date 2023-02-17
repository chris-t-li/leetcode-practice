class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        copyOfNums = nums[:]

        for i in range(len(nums)):
            nums[(i + k) % len(nums)] = copyOfNums[i]
