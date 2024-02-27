/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 // space complexity: O(1)
 // time complexity: O(n)
var moveZeroes = function(nums) {
    let low = 0;
    let high = low+1;
    while(high<= nums.length-1){
        if(nums[low] != 0){
            low++;
            high++
        }
        else if(nums[low] == 0){
            if(nums[high] != 0){
                [nums[high],nums[low]] = [nums[low],nums[high]];
                low++;
            }
            high++
        }
    }
};
