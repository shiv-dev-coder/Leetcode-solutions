class Solution:
    def resultArray(self, nums: List[int]) -> List[int]:
        arr1 = [nums[0]]
        arr2 = [nums[1]]
        j = 1
        k = 1
        for i in range(2, len(nums)):
            if(arr1[j-1] > arr2[k-1]):
                arr1.append(nums[i])
                j+=1
            else:
                arr2.append(nums[i])
                k+=1
        return arr1 + arr2