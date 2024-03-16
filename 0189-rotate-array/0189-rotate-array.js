/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 // space: O(1) 
 // time: O(n)
function rotate(nums, k) {
    // Limit k to the array size
    k = k % nums.length;
 
    // Reverse the first part of the array
    let start = 0;
    let end = nums.length - k - 1;
    while (start < end) {
        [nums[start], nums[end]] =[nums[end], nums[start]] ;
        
        start++;
        end--;
    }
 
    // Reverse the second part of the array
    start = nums.length - k;
    end = nums.length - 1;
    while (start < end) {
        [nums[start], nums[end]] =[nums[end], nums[start]] ;
        
        start++;
        end--;
    }
 
    // Reverse the whole array
    start = 0;
    end = nums.length - 1;
    while (start < end) {
        [nums[start], nums[end]] =[nums[end], nums[start]] ;
     
        start++;
        end--;
    }
}
// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
//  // time: O(n)
//  // space: O(n)
// var rotate = function(nums, k) {
//     let arr = new Array(nums.length);
//     for(let i = 0;i<nums.length;i++){
//         arr[(i+k)%arr.length] = nums[i];
//     }
//     nums.length = 0;
//     nums.push(...arr)
// };