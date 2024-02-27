/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let start = 0;
    let end = 0;
    for(let i=0;i<s.length;i++){
       let odd = expandAroundCenter(s,i,i);
       let even = expandAroundCenter(s,i,i+1);
       let temp = Math.max(odd,even);
       if(temp > end - start){
            start = i - Math.floor((temp - 1) / 2);
            end = i + Math.floor(temp / 2);
       }
    }
    return s.slice(start,end+1)   
};

var expandAroundCenter = function(s,start,end){
    while(start >= 0 && end < s.length && s[start] == s[end]){
        start--;
        end++;
    }
    return end - start - 1
}

// console.log(longestPalindrome('a')); // single
// console.log(longestPalindrome('ac')); // single
// console.log(longestPalindrome('tcact')); // odd
// console.log(longestPalindrome('tcaact')); // even
// console.log(longestPalindrome('yct')); // single
