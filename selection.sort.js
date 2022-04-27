
/**
 * Sorts a given array of integers and returns
 * the sorted array. Implementation of selection
 * requested by CLRS Exercse 2.1-2
 *
 * nums - an unsorted array of integers
 *
 * returns a sorted array of integers
 *
 */
function selectionSort(nums) {
  for(let j = 0; j < nums.length - 1; j++) {
    let smallest = Infinity
    let smallestIdx = 0;
    for(let i = j; i < nums.length; i++) {
      if(nums[i] < smallest) {
        smallest = nums[i]
        smallestIdx = i
      }
    }
    nums[smallestIdx] = nums[j]
    nums[j] = smallest
  }

  return nums
}
module.exports = selectionSort
