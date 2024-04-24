/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function(head) {
    const nodes = [];
    let node = head;

    while (node) {
        nodes.push(node.val);

        node = node.next;
    }

    const len = nodes.length;

    for (let index = 0; index <= Math.floor(nodes.length); index += 1) {
        if (nodes[index] !== nodes[nodes.length -1 -index]) {
            return false;
        }
    }

    return true;
};
