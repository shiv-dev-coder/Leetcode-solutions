class Solution:

    def reverse(self, arr, i, j):
        while(i<j):
            [arr[i], arr[j]]= [arr[j], arr[i]]
            i+=1
            j-=1

    def rotate(self, nums: list[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        k = k% len(nums)
        self.reverse(nums, 0, len(nums)-1)
        self.reverse(nums, 0, k-1)
        self.reverse(nums, k, len(nums)-1)

    