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


// var moveZeroes = function(nums) {
//     let nonZeroElements = [];
//     let zerosCount = 0;

//     for(let i = 0; i < nums.length; i++) {
//         if(nums[i] !== 0) {
//             nonZeroElements.push(nums[i]);
//         } else {
//             zerosCount++;
//         }
//     }

//     // Reconstruct the array with non-zero elements followed by zeros
//     nums.length = 0;  // Clear the original array
//     nums.push(...nonZeroElements, ...Array(zerosCount).fill(0));
// };
