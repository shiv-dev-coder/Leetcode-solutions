class Solution:
    def trap(self, height: List[int]) -> int:
        left = [0]* len(height)
        right = [0]* len(height)
        left[0] = height[0]
        right[len(height)-1] = height[len(height)-1]
        maxleft = height[0]
        maxright = height[len(height)-1]
        for i in range(1, len(left)):
            if(height[i] > maxleft): 
                maxleft = height[i]
                left[i] = maxleft
            else: left[i] = maxleft
        

        for i in range(len(right)-2, -1, -1):
            if(height[i]> maxright): 
                maxright = height[i]
                right[i] = maxright
            else: right[i] = maxright
        
        ans = 0
        for i in range(0, len(height)):
            ans += min(left[i], right[i]) - height[i]
        return ans
        