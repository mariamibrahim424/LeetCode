/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 // space complexity: O(1) if res is not included
 // time complexity: O(m*n)

var spiralOrder = function(matrix) {
    let right = matrix[0].length - 1,
        left = 0,
        top = 0,
        bottom = matrix.length - 1;
    let res = [];

    while (top <= bottom && left <= right) {
        // get every i in top row
        for (let i = left; i <= right; i++) {
            res.push(matrix[top][i]);
        }
        top++;

        // get every i in right column
        for (let i = top; i <= bottom; i++) {
            res.push(matrix[i][right]);
        }
        right--;

        if (!(top <= bottom && left <= right)) {
            break;
        }

        // get every i in bottom row
        for (let i = right; i >= left; i--) {
            res.push(matrix[bottom][i]);
        }
        bottom--;

        // get every i in left column
        for (let i = bottom; i >= top; i--) {
            res.push(matrix[i][left]);
        }
        left++;
    }

    return res;
};
