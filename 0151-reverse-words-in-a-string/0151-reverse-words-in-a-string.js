/**
 * @param {string} s
 * @return {string}
 */
// time: O(n)
// space: O(n)
var reverseWords = function(s) {
    // trim removes space from begin and end
    // split divides the string into an array splittling it by space
    // filter gets rid of elements in array with space only
    // join combines the array back into a string
    return s.trim().split(' ').reverse().filter(word=>word.length>0).join(' ');
    // let newStr = s.replace(/\s+/g, ' ').trim();
    // console.log(newStr)
    // let reversedStr = newStr.split(' ').reverse().join(' ')
    // return reversedStr;
};