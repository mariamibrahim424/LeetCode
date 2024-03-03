/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length <= 3) return Math.max(...nums);
    var rob1 = function(nums) {
        let r1=0,r2=0;
        for(const num of nums){
            let temp = r2;
            r2 = Math.max(r2,r1+num);
            r1 = temp;
        }
        return r2;
    };
    return Math.max(rob1(nums.slice(0, nums.length - 1)), rob1(nums.slice(1)));
}