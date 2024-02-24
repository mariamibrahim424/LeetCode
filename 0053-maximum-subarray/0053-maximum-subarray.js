/**
 * @param {number[]} nums
 * @return {number}
 */
 // time complexity: O(n)
 // space complexity: O(1)
var maxSubArray = function(nums) {
    if(nums.length == 0) return 0;
    let max = nums[0];
    for(let i =1;i<nums.length;i++){
        nums[i] = Math.max(0, nums[i - 1]) + nums[i];
        if(nums[i] > max){
            max = nums[i]
        }
    }
    return max;
};