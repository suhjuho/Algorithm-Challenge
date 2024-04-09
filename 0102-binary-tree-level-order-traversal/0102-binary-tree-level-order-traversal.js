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
 * @return {number[][]}
 */
const levelOrder = function(root) {
    if (root === null) {
        return [];
    }

    const result = [];

    let nodes = [root];
    let nextNodes = [];

    while (nodes.length > 0) {
        const depth = [];

        nodes.forEach((node) => {
            if (node) {
                depth.push(node.val);
                nextNodes.push(node.left);
                nextNodes.push(node.right);
            }
        });

        if (depth.length > 0) {
            result.push(depth.slice());
        }

        nodes = nextNodes;
        nextNodes = [];
    }

    return result;
};
