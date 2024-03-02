/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    // 3 cases:
    // current num is largest
    // current num(+) * prevMax(+) is largest
    // current num(-) * prevMin(-) is largest
    // time: O(n)
    // space: O(1)
    if(nums.length == 0) return 0;
    let product = nums[0], max = product, min = product;
    for(let i = 1;i<nums.length;i++){
        temp = max;
        max = Math.max(nums[i],nums[i]*max,nums[i]*min);
        min = Math.min(nums[i],nums[i]*temp,nums[i]*min);
        
        product = Math.max(max,product);
    }
    return product;
};