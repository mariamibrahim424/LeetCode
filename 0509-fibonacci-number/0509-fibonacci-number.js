/**
 * @param {number} n
 * @return {number}
 */
// time complexity: O(n) because we can look up previous calculations in memo array
// space complexity: O(n) because the memo array will be length n 
var fib = function(n) {
    let memo = [0,1];
    function fibSeq(n){
        if(memo[n] !== undefined){
            return memo[n];
        }
        if(n === 0 || n === 1){
            return n;
        }
        memo[n] = fibSeq(n-1)+fibSeq(n-2);
        return memo[n];
    }
    fibSeq(n);
    return memo[n];
};