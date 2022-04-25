
/**
 * Sorts a given array of integers and returns
 * the sorted array. Implementation of insertion
 * sort described in CLRS chapter 2.1
 *
 * nums - an unsorted array of integers
 */
function insertionSort(nums) {
  for(let j = 1; j < nums.length; j++) {
    let key = nums[j]
    let i = j - 1
    while(i >= 0 && nums[i] > key) {
      nums[i + 1] = nums[i]
      i = i - 1
    }
    nums[i + 1] = key
    console.log(nums)
  }

  return nums
}
module.exports = insertionSort
