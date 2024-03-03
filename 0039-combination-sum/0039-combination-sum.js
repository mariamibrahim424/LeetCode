/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 // time: O(2^target) 
 // space: O(2^target) 
 // base cases:
 //     sum == target
 //     i > candidates.length-1 || sum > target
var combinationSum = function(candidates, target) {
    let result = []
    var backtrack = (i,currArr,sum) => {
        if(sum===target){
            result.push([...currArr]);
            return;
        }
        if(i>=candidates.length || sum > target){
            return;
        }
        currArr.push(candidates[i]);
        backtrack(i,currArr,sum+candidates[i]);
        currArr.pop();
        backtrack(i+1,currArr,sum);

    }
    backtrack(0,[],0);
    return result;
};