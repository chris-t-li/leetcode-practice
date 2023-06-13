class Solution:
    def removeDuplicates(self, s: str, k: int) -> str:

        stk = [] # [char, count]
        for c in s:
            if stk and stk[-1][0] == c:
                stk[-1][1] += 1
            else:
                stk.append([c, 1])
            
            if stk[-1][1] == k:
                stk.pop()
        
        str = ""
        for char, count in stk:
            str += (char * count)
        
        return str