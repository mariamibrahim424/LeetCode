/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 // time: O(H), where H is height of tree
 // space: O(1)
var lowestCommonAncestor = function(root, p, q) {
    while(root){
        if(root.val > p.val && root.val > q.val){
            root = root.left;
        }
        else if(root.val < p.val && root.val < q.val){
            root = root.right;
        }
        // p.val > root.val && q.val < root.val
        // p.val < root.val && q.val > root.val
        // p.val == root.val
        // q.val == root.val
        else{
            return root;
        }
    }
    return null;
};