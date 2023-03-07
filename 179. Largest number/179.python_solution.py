class Solution:
    def largestNumber(self, nums: List[int]) -> str:

        for i in range(len(nums)):
            for j in range(0, i):
                if int(""+str(nums[i])+str(nums[j])) > int(""+str(nums[j])+str(nums[i])):
                    nums[i], nums[j] = nums[j], nums[i]

        if nums[0] == 0:
            return "0"
        else:
            string_num = ""
            for num in nums:
                string_num += str(num)
            return string_num
