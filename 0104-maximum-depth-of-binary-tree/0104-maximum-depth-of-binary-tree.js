/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function(root) {
    let result = 0;
    
    if (!root) {
        return result;
    }

    function checkDepth(node, depth) {
        if (node) {
            result = Math.max(result, depth);
        }

        if (node.left) {
            checkDepth(node.left, depth + 1);
        }

        if (node.right) {
            checkDepth(node.right, depth + 1);
        }
    }

    checkDepth(root, 1);

    return result;
};
