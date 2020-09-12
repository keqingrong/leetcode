/**
 * 384. Shuffle an Array
 * Shuffle a set of numbers without duplicates.
 *
 * Example:
 * // Init an array with set 1, 2, and 3.
 * int[] nums = {1,2,3};
 * Solution solution = new Solution(nums);
 *
 * // Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must equally likely to be returned.
 * solution.shuffle();
 *
 * // Resets the array back to its original configuration [1,2,3].
 * solution.reset();
 *
 * // Returns the random shuffling of array [1,2,3].
 * solution.shuffle();
 */

/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums;
};

/**
* Resets the array to its original configuration and return it.
* @return {number[]}
*/
Solution.prototype.reset = function () {
  return this.nums;
};

/**
* Returns a random shuffling of the array.
* @return {number[]}
*/
Solution.prototype.shuffle = function () {
  var copy = this.nums.slice();
  var count = copy.length;
  var randomIndex, currentIndex, currentItem;
  while (count > 0) {
    randomIndex = Math.floor(Math.random() * count);
    currentIndex = count - 1;
    currentItem = copy[currentIndex];
    copy[currentIndex] = copy[randomIndex];
    copy[randomIndex] = currentItem;
    count--;
  }
  return copy;
};

/**
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(nums)
* var param_1 = obj.reset()
* var param_2 = obj.shuffle()
*/
