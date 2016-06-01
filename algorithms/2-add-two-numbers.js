/**
 *
 * You are given two linked lists representing two non-negative numbers. The 
 * digits are stored in reverse order and each of their nodes contain a 
 * single digit. Add the two numbers and return it as a linked list.
 *
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 *
 * 243 + 564 = 708
 */

/**
 * Definition for singly-linked list.
 */
 function ListNode(val) {
     this.val = val;
     this.next = null;
 }

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
	var sum = l1.val + l2.val;
	var next1 = l1.next;
	var next2 = l2.next;
	var l3 = new ListNode(sum % 10);
	sum = Math.floor(sum / 10); 
	while(next1 || next2 || sum!==0){
		sum += next1?next1.val: 0 + next2?next2.val:0;
		next1 = next1?next1.next: null;
		next2 = next2?next2.next: null;
		l3 = new ListNode(sum % 10);
		l3 = l3.next;
		sum = Math.floor(sum/10);
	}
	return l3;
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));

//addTwoNumbers([2, 4, 3], [5, 6, 4]); // [7, 0, 8]
//addTwoNumbers([5], [5]); // [0, 1]
//addTwoNumbers([2, 4, 3], [5, 6, 6, 9, 9]); // 
//console.log(addTwoNumbers([], [5, 6, 6, 9, 9])); // 


