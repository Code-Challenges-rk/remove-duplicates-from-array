/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  var deduplicatedSet = new Set(nums);
  var deduplicatedArray = Array.from(deduplicatedSet);
  for (var i = 0; i < deduplicatedArray.length; i++) {
    nums[i] = deduplicatedArray[i];
  }
  nums.length = deduplicatedArray.length;
  return nums.length;
};

let arr = [1, 1, 2];
console.log(removeDuplicates(arr));
