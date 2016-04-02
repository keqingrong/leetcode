/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	var len = nums.length;
	var i;
	var map = {};
	var num1, num2;
	for(i = 0; i < len; i++){
		num1 = nums[i];
		num2 = target - num1;
		if(map.hasOwnProperty(num2)){
			return [i, map[num2]];
		} else {
			map[num1] = i;
		}
	}
};
