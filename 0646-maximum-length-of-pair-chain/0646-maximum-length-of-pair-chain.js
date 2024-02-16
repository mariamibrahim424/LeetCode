/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    if(pairs.length == 0){
        return 0;
    }
    pairs.sort((a,b)=>a[1] - b[1]);
    let res = 1;
    let prev = pairs[0];
    
    for(let i = 1;i<pairs.length;i++){
        curr = pairs[i];
        if(curr[0] > prev[1]){
            res++;
            prev = curr;
        }
    }
    return res;
};

// runtime complexity: (n log n) because the sorting is the dominant factor
// space complexity: O(1) it's constant because it doesn't depend on the size of the array 