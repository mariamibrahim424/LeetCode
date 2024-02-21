/**
 * @param {character[][]} grid
 * @return {number}
 */
// Space complexity: O(m*n)
// time complexity: O(m*n)
var numIslands = function(grid) {
    let count = 0;
    function DFS(i,j,grid){
        if(i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] == '0') return;
        grid[i][j] = '0';
        DFS(i+1,j,grid);
        DFS(i-1,j,grid);
        DFS(i,j+1,grid);
        DFS(i,j-1,grid);
    }
    for(let i = 0; i <grid.length;i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] === '1'){
                count++;
                DFS(i,j,grid)
            }
        }
    }
    return count;
};