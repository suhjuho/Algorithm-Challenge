/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function(head, n) {
    let node = head;
    const nodeList = [];
    
    while (node) {
        nodeList.push(node);
        node = node.next;
    }
    
    if (nodeList.length === 1) {
        return null
    }
    
    if (n === 1) {
        nodeList[nodeList.length - 2].next = null;
        return head;
    } else if (n === nodeList.length) {
        return nodeList[1];
    }
    
    nodeList[nodeList.length - n - 1].next = nodeList[nodeList.length - n + 1];
    
    
    return head;    
};
