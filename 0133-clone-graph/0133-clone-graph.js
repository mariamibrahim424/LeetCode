/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if(!node){
        return null;
    }
    let queue = [node];
    let visited = new Map();
    let clonedRoot = new Node(node.val);
    visited.set(node,clonedRoot);
    while(queue.length > 0){
        const currNode = queue.shift();
        for(const neighbor of currNode.neighbors){
            if(!visited.has(neighbor)){
                let clonedNode = new Node(neighbor.val);
                visited.set(neighbor,clonedNode);
                queue.push(neighbor);
            }
            visited.get(currNode).neighbors.push(visited.get(neighbor));
        }
    }
    return clonedRoot;
};