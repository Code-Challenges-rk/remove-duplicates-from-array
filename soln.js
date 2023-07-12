/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  let uniqueArr = [nums[0]];

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== nums[i+1]) {
        uniqueArr.push(nums[i+1]);
        nums[i] = uniqueArr[i];
      }
  }
  return nums;
};

let arr = [1, 1, 2];
console.log(removeDuplicates(arr));
