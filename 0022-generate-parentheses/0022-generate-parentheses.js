/**
 * @param {number} n
 * @return {string[]}
 */
 // base case: openCount === closeCount == n
 // add ( if opencount < n
 // add ) if closecount < opencount 
 // space complexity: O(2n) -> O(n) because the stack will at most hold 2n elements
 // time complexity: O(2^2n) because the max depth is 2n and the branching is 2
var generateParenthesis = function(n) {
    let result = [];
    let stack = [];
    function backtrack(openCount, closeCount){
        if(openCount === closeCount && closeCount == n ){
            result.push(stack.join(''));
            return;
        }

        if(openCount < n){
            stack.push('(');
            backtrack(openCount+1,closeCount);
            stack.pop()
        }

        if(closeCount < openCount){
            stack.push(')');
            backtrack(openCount,closeCount+1);
            stack.pop();
        }
    }
   backtrack(0,0);
   return result;
};