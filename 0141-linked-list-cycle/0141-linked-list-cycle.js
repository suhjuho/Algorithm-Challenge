/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {  
    const nodeMap = new Map();
    let node = head;

    while (node && node.next !== null) {
        nodeMap.set(node, true);

        if (nodeMap.get(node.next)) {
            return true
        }

        node = node.next;
    }

    return false;
};
