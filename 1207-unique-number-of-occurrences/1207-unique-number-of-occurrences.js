/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let occur = new Map();
    for(const key of arr){
        if(occur.has(key)){
            let val = occur.get(key);
            occur.set(key,val+1);
        }
        else{
            occur.set(key,1);
        }
    }
    let removedRepeats = new Set(occur.values());
    return removedRepeats.size == occur.size;
};
// N = arr.length
// runtime complexity: O(N) because we have to loop through all elements in arr
//      creating the set could potentially take O(N) -> O(N+N) -> O(N)
// space complexity: O(N) because in the worst case, number of unique values will equal the length of arr