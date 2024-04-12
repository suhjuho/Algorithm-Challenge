/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = function(head) {
    const nodeList = [];
    let node = head;

    while (node !== null) {
        nodeList.push(node);
        node = node.next;
    }

    return nodeList[Math.floor(nodeList.length / 2)];
}
