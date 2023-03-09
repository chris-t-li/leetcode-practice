class Solution:
    def checkPossibility(self, nums: List[int]) -> bool:
        for i in range(len(nums) - 1):
            if nums[i] > nums[i+1]:
                temp = nums[i]
                nums[i] = nums[i+1]
                check1 = self.checkArray(nums)
                nums[i] = temp
                nums[i+1] = temp
                check2 = self.checkArray(nums)

                return check1 or check2

        return True

    def checkArray(self, array):
        for i in range(len(array) - 1):
            if array[i] > array[i+1]:
                return False

        return True
