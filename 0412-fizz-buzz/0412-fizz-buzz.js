/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let result = new Array(n);
    for(let i = 1; i<=n; i++){
        if(i % 5 == 0 && i % 3 == 0){
            result[i-1] = 'FizzBuzz'
        }
        else if(i % 5 == 0){
            result[i-1] = 'Buzz'
        }
        else if(i % 3 == 0){
            result[i-1] = 'Fizz'
        }
        else{
            result[i-1] = i.toString();
        }   
    }
    return result;
};

//space complexity: O(n)
// time complexity: O(n)