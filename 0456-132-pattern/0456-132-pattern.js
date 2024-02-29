/**
 * @param {number[]} nums
 * @return {boolean}
 */
 // runtime complexity: O(n) because in the worst case we will end up adding every element to the stack 
 // at most once and popping it at most once which is 2*n operations
 // space complexity: O(n) for the stack where n is the length of nums
var find132pattern = function(nums) {
    if(nums.length < 3) return false;
    let third = -Infinity;
    let stack = [];
    for(let i = nums.length-1;i>=0;i--){
        if(nums[i] < third) return true; // check 1 and 2 in 132 pattern, 1<2
        // check 2 and 3 in 132 pattern, 3 > 2
        while(stack.length && stack[stack.length-1] < nums[i]){
            third = stack.pop()
        }
        stack.push(nums[i])
    }
    return false;
};

// subarray not subsequence (sliding window)
// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// // [1,4,2,6,9] i<j<k and [i] < [k] < [j]
// var find123Pattern = function(nums){
//   for(let i = 0; i+2 < nums.length;i++){
//     if(nums[i] < nums[i+2] && nums[i+2] < nums[i+1]){
//       return true;
//     }
//   }
//   return false;
// }
