/**
 * 415. Add Strings
 *
 * Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.
 *
 * Note:
 * 1. The length of both num1 and num2 is < 5100.
 * 2. Both num1 and num2 contains only digits 0-9.
 * 3. Both num1 and num2 does not contain any leading zero.
 * 4. You must not use any built-in BigInteger library or convert the inputs to integer directly.
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let sum = '';
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  while (i >= 0 || j>=0 || carry !== 0) {
    let a = i >= 0 ? Number(num1.charAt(i)) : 0;
    let b = j >= 0 ? Number(num2.charAt(j)) : 0;
    let c = a + b + carry;
    carry = c >= 10 ? 1 : 0;
    sum = c % 10 + sum;
    i--;
    j--;
  }
  return sum;
};
