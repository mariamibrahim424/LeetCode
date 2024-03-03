/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 // time: O(kn^k) -> k is height of tree and we make at most n decisions
 // we also have to copy each array wich takes O(k) 
 // space: O(k) in the worst case, we could go as deep as k levels in the call stack
var combine = (n,k) =>{
    const result = [];
    var backtrack = (curArr,start) =>{
        if(curArr.length == k){
            result.push([...curArr]);
            return;
        }
        // n = 4
        // k = 2
        // 1st iteration: 1-4, 2nd iteration: 2-4, 3rd: 3-4, 4th: 4
        for(let i = start;i<=n;i++){ 
            curArr.push(i);
            backtrack(curArr,i+1);
            curArr.pop();
        }
    }
    backtrack([],1);
    return result;
}