class Solution:
    def isHappy(self, n: int) -> bool:
        ans = set()
        while(True):
            currentsum = 0
            while(n>0):
                rem = n%10
                currentsum+= (rem*rem)
                n = n//10
            if(currentsum in ans): return False
            elif(currentsum == 1): return True
            else: ans.add(currentsum)
            n = currentsum
