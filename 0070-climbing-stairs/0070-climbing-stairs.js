/**
 * @param {number} n
 * @return {number}
 */
// DP bottom up 
// time: O(n) because we loop around n times
// space: O(1) because we have constant variables
var climbStairs = function(n) {
   let right = 1, left = 1; 
   for(let i = 2;i<=n;i++) {
    temp = left;
    left = left + right;
    right = temp;
   }
   return left;
};

// /**
//  * @param {number} n
//  * @return {number}
//  */
// time: O(n)
// space: O(n)
// var climbStairs = function(n) {
//     const dp = [];
//     dp[0] = 1;
//     dp[1] = 1;
//     for(let i = 2; i <= n; ++i){
//         dp[i] = dp[i - 2] + dp[i-1];
//     }
//     return dp[n]
// };