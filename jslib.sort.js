const intComp = require('./utils').intComp

/**
 * Sorts a given array of integers and returns
 * the sorted array.
 *
 * nums - an unsorted array of integers
 */
function jslibSort(nums) {
  return nums.sort(intComp)
}
module.exports = jslibSort
