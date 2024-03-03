/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
 // time: O(k^n) n is number of cookies and k is number of decision 
 // space: O(k+n) bcs the bag array is size k and the call stack in the worst case 
 // will will go as deep as the length of cookies 
var distributeCookies = function(cookies, k) {
    let minUnfairness = Infinity;
    let bag = Array(k).fill(0);
    var backtrack = (i) => {
        if (i >= cookies.length){
            let maxTotal = -Infinity;
            for(let b of bag) maxTotal = Math.max(maxTotal,b);
            minUnfairness = Math.min(minUnfairness,maxTotal);
            return;
        }
        for(let j = 0; j < k;j++){
            bag[j] += cookies[i];
            backtrack(i+1);
            bag[j] -= cookies[i];
        }
    }
    backtrack(0);
    return minUnfairness;
};