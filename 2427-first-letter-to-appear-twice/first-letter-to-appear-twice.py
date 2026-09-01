class Solution:
    def repeatedCharacter(self, s: str) -> str:
      st = set()
      for i in range(0, len(s)):
        if(s[i] in st): return s[i]
        else: st.add(s[i])