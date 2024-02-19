/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let result = new Array(n);
    for(let i = 0; i<n; i++){
        let ind = i+1;
        if(ind % 5 == 0 && ind % 3 == 0){
            result[i] = 'FizzBuzz'
        }
        else if(ind % 5 == 0){
            result[i] = 'Buzz'
        }
        else if(ind % 3 == 0){
            result[i] = 'Fizz'
        }
        else{
            result[i] = ind.toString();
        }   
    }
    return result;
};

//space complexity: O(n)
// time complexity: O(n)