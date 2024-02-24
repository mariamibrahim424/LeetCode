/**
 * @param {number[]} height
 * @return {number}
 */
 // space complexity: O(1)
 // time complexity: O(n)
var maxArea = function(height) {
    let  maxAmount = 0;
    if(height.length == 0) return maxAmount;
    let right = height.length-1;
    let left = 0;
    while(right>left){
        let h = Math.min(height[right],height[left]);
        let w = right-left;
        let amount = h*w;
        maxAmount = Math.max(amount,maxAmount);
        if(height[right] > height[left]){
            left++;
        }
        else{
            right--;
        }
    }
    return maxAmount;
};