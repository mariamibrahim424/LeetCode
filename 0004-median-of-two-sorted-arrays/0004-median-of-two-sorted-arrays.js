/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 // time complexity: O(m+n) for traversing both arrays
 // space complexity: O(m+n) for merged result array 
var findMedianSortedArrays = function(nums1, nums2) {
  let i = 0, j = 0, median = 0;
  let result = [];
  while(i < nums1.length && j <nums2.length){
      if(nums1[i] < nums2[j]){
          result.push(nums1[i]);
          i++;
      }
      else{
          result.push(nums2[j]);
          j++;
      }
  }
  result.push(...nums1.slice(i),...nums2.slice(j));
  
  let middle = Math.floor(result.length/2);
  let isEven = result.length % 2 === 0;
  median = isEven ? ((result[middle] + result[middle-1])/2) : result[middle];
  return median;
};
// time complexity: O(max(n,m)log(m+n))
// var findMedianSortedArrays = function(nums1, nums2) {
//     let median = 0;
//     let result = [...nums1,...nums2];
//     result.sort((a,b)=> a-b);
//     let middleIndex = Math.floor(result.length/2);

//     if(result.length % 2 ==0){
//         median = ((result[middleIndex] + result[middleIndex-1])/2)
//     }
//     else{
//         median = result[middleIndex]
//     }
//     return median
// };