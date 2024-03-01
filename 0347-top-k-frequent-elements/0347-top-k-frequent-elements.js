/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 // time complexity: O(n log n) because the sorting is the dominant factor
 // space complexity: O(n) where n is size of nums because in the worst case nums array will contain only unique numbers 
var topKFrequent = function(nums, k) {
    let occurences = new Object();
    for(const i in nums){
        occurences[nums[i]] = occurences[nums[i]] ? occurences[nums[i]]+ 1 : 1;
    }
    let sorted = Object.keys(occurences).sort((a,b)=> occurences[b] - occurences[a])
    return sorted.slice(0,k);
};

// used object instead of map because object.keys(occurences) returns an array of the keys
// whereas map.keys() returns an iterator so I cant used the sort function on it to sort the keys by their values