/**
 * @param {number[]} nums
 * @return {number[]}
 */
 // space complexity: O(1) not counting array returned and O(n) counting it
 // time complexity: O(2n)-> O(n)
var productExceptSelf = function(nums) {
    const result = Array(nums.length).fill(1);
    let prefix = 1;
    let suffix = 1;
    for(let i = 0;i<nums.length;i++){
        result[i] = prefix;
        prefix *= nums[i]
    }
    
    for(let j = nums.length-1;j>=0;j--){
        result[j] *= suffix;
        suffix *= nums[j];
    }
    return result;
};