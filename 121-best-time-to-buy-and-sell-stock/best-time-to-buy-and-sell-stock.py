class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        maxprofit = 0
        minpri = prices[0]
        for i in range(1, len(prices)):
            if(prices[i] <minpri): 
                minpri = prices[i]
                continue
            current = prices[i] - minpri
            if(current > maxprofit): maxprofit = current
        return maxprofit
            