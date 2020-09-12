/**
 * Given a string, find the length of the longest substring without repeating characters.
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  var length = s.length;
  if (length <= 1) {
    return length;
  }
  var maxLengthOfSubstring= 1;
  var beginIndex = 0;
  var endIndex = 0;
  // 从第二个字符开始判断
  for (var i = 1; i < length; i++) {
    var char = s.charAt(i);
    // 判断字符是否已经包含在当前的子字符串中
    var charIndexOfSubstring = getCharIndexOfString(s, char, beginIndex, endIndex);
    // 不包含，扩充字符串，更新最长子字符串长度
    // 包含，说明有重复，修改子字符串，从重复处继续向后查找
    if (charIndexOfSubstring === -1) {
      endIndex = i;
      var currentLengthOfSubstring = endIndex - beginIndex + 1;
      if (currentLengthOfSubstring > maxLengthOfSubstring) {
        maxLengthOfSubstring = currentLengthOfSubstring;
      }
    } else {
      beginIndex = charIndexOfSubstring + 1;
      endIndex = i;
    }
  }

  return maxLengthOfSubstring;
};

/**
 * 包含返回索引，不包含返回-1
 * @param {string} str
 * @param {string} ch
 * @param {number} [fromIndex]
 * @param {number} [toIndex]
 * @returns {number}
 */
function getCharIndexOfString(str, ch, fromIndex, toIndex) {
  var beginIndex = fromIndex === undefined ? 0 : fromIndex;
  var endIndex = toIndex === undefined ? str.length : toIndex;
  if (fromIndex > toIndex) {
    beginIndex = toIndex;
    endIndex = fromIndex;
  }
  while (endIndex >= beginIndex) {
    if (str.charAt(beginIndex) === ch) {
      return beginIndex;
    } else {
      beginIndex++;
    }
  }
  return -1;
}

