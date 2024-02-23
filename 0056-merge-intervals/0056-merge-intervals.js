/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// runtime complexity: O(n) because we loop through the whole intervals array 
// sapce complexity: O(n) because in the worst case the length of answer will be the length of intervals
var merge = function(intervals) {
    let answer = [];
    if(intervals.length == 0) return answer;
    intervals.sort((a,b)=>(a[0]-b[0]));
    let curr = intervals[0];
    for(let i = 1;i < intervals.length;i++){
        if(intervals[i][0] <= curr[1]){
            curr[1] = Math.max(intervals[i][1],curr[1]);
        }
        else{
            answer.push(curr);
            curr = intervals[i];
        }
    }
    answer.push(curr);
    return answer;
};