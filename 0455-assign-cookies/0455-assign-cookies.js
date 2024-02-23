/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
 // runtime complexity: O(n log n), due to the sorting step
 // space complexity: O(1)
var findContentChildren = function(g, s) {
    let max = 0;
    if(s.length ==0) return max;
    g.sort((a,b)=>a-b);
    s.sort((a,b)=>a-b);

    let cookieInd = s.length-1;
    let childInd = g.length-1;

    while(cookieInd >= 0 && childInd >= 0){
        if(s[cookieInd] >= g[childInd]){
            cookieInd--;
            childInd--;
            max++;
        }
        else{
            childInd--;
        }
    }
    return max;
};