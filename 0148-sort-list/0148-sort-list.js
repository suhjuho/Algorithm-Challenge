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
const sortList = function(head) {
    if (!head) {
        return head;
    }

    const numbers = [];
    let node = head;

    while (node) {
        numbers.push(node.val);

        node = node.next;
    }

    numbers.sort((a, b) => a - b);

    let tail;
    let newHead;

    for (let i = numbers.length - 1; i >= 0; i -= 1) {
        newHead = new ListNode(numbers[i], tail);
        tail = newHead;
    }

    return newHead;
};
