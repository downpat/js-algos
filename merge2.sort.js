/**
 * Merges two sorted arrays of integers into a
 * new sorted array. Alternative implementation
 * of Merge algorithm in CLRS Chapter 2.3.1
 *
 * sortedOne - a sorted array
 * sortedTwo - a sorted array
 *
 * returns a single sorted array
 *
 */
function merge(sortedOne, sortedTwo) {
  //Get the final length of the merged array
  let sortedLength = sortedOne.length + sortedTwo.length
  
  //Add sentinels to the end of the arrays
  sortedOne.push(Infinity)
  sortedTwo.push(Infinity)

  //Loop through the two given arrays and track
  //their current positions
  let sorted = []
  let onePos = 0
  let twoPos = 0
  for(let i = 0; i < sortedLength; i++) {
    if(sortedOne[onePos] <= sortedTwo[twoPos]) {
      //If the item at the current position of the
      //first array is smaller, add it to the final
      //array and increment the first array's position
      sorted[i] = sortedOne[onePos]
      onePos++
    } else {
      //If the second array's current item is smaller,
      //use that and increment the second array's position
      sorted[i] = sortedTwo[twoPos]
      twoPos++
    }
  }

  return sorted
}

function mergeSort(nums) {
  if(nums.length > 1) {
    //If the array has multiple items, split it into two
    //halves and sort them
    let halfIdx = Math.floor(nums.length / 2)
    let sortedFirstHalf = mergeSort(nums.slice(0, halfIdx))
    let sortedSecondHalf = mergeSort(nums.slice(halfIdx, nums.length))
    return merge(sortedFirstHalf, sortedSecondHalf)
  }

  return nums
}

module.exports = mergeSort
