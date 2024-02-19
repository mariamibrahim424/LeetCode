/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length === 1) return 1;
    let string = new Set();
    let maxLen = 0;
    for(let i = 0;i < s.length;i++){
        for(let j = i;j < s.length;j++){
            if(!string.has(s[j])) string.add(s[j]);
            else{
                maxLen = Math.max(maxLen,string.size);
                string.clear();
                break;
            }
        }
    }
    return maxLen;
};
// space complexity: O(n) in the worst case string Set is going to equal the length of string s 
// time complexity: O(n^2) because we have two nested loops and even though the inner loop decreases by one each iteration(n * (n-1) / 2), the dominant term is still n^2