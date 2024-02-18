/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    let arr = s.split('');
    for(let i = 0; i<s.length;i++){
        let first = arr.shift();
        arr.push(first);
        if(arr.join('') == goal){
            return true;
        }
    }
    return false;
};

// time complexity: O(n^2)
// space complexity: O(n)

// /**
//  * @param {string} s
//  * @param {string} goal
//  * @return {boolean}
//  */
// var rotateString = function(s, goal) {
//     let counter = s.length;
//     let result = s;
//     while(counter){
//         let firstLet = result[0];
//         result =  result.substring(1).concat(firstLet);
//         console.log(result);
//         if(result == goal)return true;
//         counter--;
//     }
//     return false;
// };