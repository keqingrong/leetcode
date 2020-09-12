/**
 * 4. Median of Two Sorted Arrays
 *
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 * You may assume nums1 and nums2 cannot be both empty.
 *
 * Example 1:
 * nums1 = [1, 3]
 * nums2 = [2]
 *
 * The median is 2.0
 *
 * Example 2:
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 *
 * The median is (2 + 3)/2 = 2.5
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var m = nums1.length;
  var n = nums2.length;
  // 两个数组没有交叉
  if (nums1[m-1] < nums1[0]) {
    // [...nums1, ..nums2]
  }
  if (nums2[n-1] < nums1[0]) {
    // [ ..nums2, ...nums1]
  }
  // 有交叉，需要归并排序 O(nlogn)
  // [1,2,3,4,5,6,7,8]
  //         [5,6,7,8,9,10,11,12]
};
