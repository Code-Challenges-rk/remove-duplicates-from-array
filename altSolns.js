/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  //TIME-COMPLEXITY: O(n);
  //MEMORY: O(n);
  let arr = [];
  for (let i = -1; i < nums.length - 1; i++) {
    if (nums[i + 1] !== nums[i]) {
      arr.push(nums[i + 1]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    nums[i] = arr[i];
  }
  nums.length = arr.length;
  return nums.length;
};

const deleteDuplicates = (nums) => {
  // 3rd solution ***
  //TIME-COMPLEXITY: O(n);
  //MEMORY: O(1);
  let currentIndex = 0;
  for (let i = -1; i < nums.length - 1; i++) {
    if (nums[i + 1] !== nums[i]) {
      nums[currentIndex] = nums[i + 1];
      currentIndex++;
    }
  }
  nums.length = currentIndex;
  return nums.length;
};

function remDuplicates(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
}
