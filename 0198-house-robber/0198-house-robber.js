/**
 * @param {number[]} nums
 * @return {number}
 */
 // time: O(n)
 // space O(1)
var rob = function(nums) {
    let r1=0,r2=0;
    for(const num of nums){
        let temp = r2;
        r2 = Math.max(r2,r1+num);
        r1 = temp;
    }
    return r2;
};