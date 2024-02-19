/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length === 0) return '';

    let longestStr = s[0];
    for(let i = 0; i<s.length;i++){
        for(let j = s.length-1; j > i;j--){
            if(isPalindrome(i,j,s)){
                if(j-i >= longestStr.length){
                    longestStr = s.slice(i,j+1);
                }
            }
        }
    }
    return longestStr;
};

var isPalindrome = function (start,end,str){
    while(end > start){
        if(str[end--] !== str[start++]) return false;
    }
    return true;
};
// runtime complexity:
// space complexity: 