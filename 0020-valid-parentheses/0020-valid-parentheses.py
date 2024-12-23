class Solution:
    def isValid(self, s: str) -> bool:
        mapping = {'(':')', '{':'}','[':']'}

        stack = []
        if len(s) % 2 != 0:
            return False
        for char in s:
            if char in mapping:
                stack.append(char)
            else:
                if not stack: 
                    return False
                opened = stack.pop()
                if mapping[opened] != char:
                    return False

        return len(stack) == 0  