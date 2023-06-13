class Solution:
    def minSteps(self, s: str, t: str) -> int:
        s_dict = {}
        t_dict = {}

        for c in s:
            if c not in s_dict:
                s_dict[c] = 1
            else:
                s_dict[c] += 1
        
        for c in t:
            if c not in t_dict:
                t_dict[c] = 1
            else:
                t_dict[c] += 1

        commonChars = 0
        for key in s_dict.keys():
            
            if key in t_dict:
                commonChars += min(t_dict[key], s_dict[key])
    
        return len(s) - commonChars

