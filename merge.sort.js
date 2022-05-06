/**
 * Merges two sorted arrays of integers into a single
 * sorted array and updates the given array in place.
 * Implementation of Merge algorithm in CLRS Chapter 2.3.1
 *
 * sortedOneTwo - an array with two sorted subarrays
 * stIdxOne - the index of sortedOneTwo where the first
 *              sorted subarray starts
 * endIdxOne - the index of sortedOneTwo where the first
 *              sorted subarray ends
 * endIdxTwo - the index of sortedOneTwo where the second
 *              sorted subarray ends
 *
 * When finished, sortedOneTwo will be sorted from
 * stdIdxOne to endIdxTwo
 *
 * Note: It is assumed the second subarray starts at the
 * index after endIdxOne.
 *
 */
function merge(sortedOneTwo, stIdxOne, endIdxOne, endIdxTwo) {
  //Get the length of both sorted arrays
  let lengthLeft = endIdxOne - stIdxOne + 1
  let lengthRight = endIdxTwo - endIdxOne

  //Initialize the two arrays separately
  let arrLeft = []
  let arrRight = []

  //Copy the first sorted subarray into arrLeft
  for(let i = 0; i < lengthLeft; i++) {
    arrLeft[i] = sortedOneTwo[stIdxOne + i]
  }

  //Copy the second sorted subarray into arrRight
  for(let j = 0; j < lengthRight; j++) {
    arrRight[j] = sortedOneTwo[endIdxOne + 1 + j]
  }

  //Add sentinels to the end of the arrays
  arrLeft.push(Infinity)
  arrRight.push(Infinity)

  let leftPos = 0
  let rightPos = 0
  for(let k = stIdxOne; k <= endIdxTwo; k++) {
    //If the value of the current position of the left
    //array is less than or equal to the value of the
    //current position of the right array...
    if(arrLeft[leftPos] <= arrRight[rightPos]) {
      //Then that is the smallest available unused number,
      //so put it at the smallest unset position in sortedOneTwo
      sortedOneTwo[k] = arrLeft[leftPos]
      //Move to the next highest position of the left array
      leftPos++
    } else {
      //Else the smallest available number is the value
      //at the current position of the right array, so
      //it goes into the smallest unset position in sortedOneTwo
      sortedOneTwo[k] = arrRight[rightPos]
      rightPos++
    }
  }
}


/**
 * Sorts a given subarray of integers in place. If
 * stIdx and endIdx are not provided, sorts the
 * entire array. Implementation of merge sort
 * described in CLRS chapter 2.3.1
 *
 * nums - an array of integers
 * stIdx - the start index of the subarray to sort
 * endIdx - the end index of the subarray to sort
 */
function mergeSort(nums, stIdx, endIdx) {
  //If stIdx and endIdx are undefined, assume this
  //is the first layer of recursion
  let firstTime = stIdx === undefined && endIdx === undefined
  if(firstTime) {
    stIdx = 0
    endIdx = nums.length - 1
  }

  //If the stIdx is less than the endIdx, this
  //subarray of nums must have multiple values
  if(stIdx < endIdx) {
    //Get the index of the halfway point of this
    //subarray
    endSubOne = Math.floor((stIdx + endIdx) / 2)

    if(firstTime) {
      console.log(`
        Nums: ${nums}
        Nums[startIndex]: ${nums[stIdx]}
        Nums[endSubOne]: ${nums[endSubOne]}
        Nums[endIndex]: ${nums[endIdx]}
      `)
    }
    

    //Sort the first subarray
    if(firstTime) {
      console.log(
        `First subarray before sort: ${nums.slice(stIdx, endSubOne + 1)}`
      )
    }
    mergeSort(nums, stIdx, endSubOne)
    if(firstTime) {
      console.log(
        `First subarray after sort: ${nums.slice(stIdx, endSubOne + 1)}`
      )
    }

    //Sort the second subarray
    if(firstTime) {
      console.log(
        `Second subarray before sort: ${nums.slice(endSubOne + 1, endIdx + 1)}`
      )
    }
    mergeSort(nums, endSubOne + 1, endIdx)
    if(firstTime) {
      console.log(
        `Second subarray after sort: ${nums.slice(endSubOne + 1, endIdx + 1)}`
      )
    }

    //Merge the two sorted sub arrays
    if(firstTime) {
      console.log(
        `Primary subarray before merge: ${nums.slice(stIdx, endIdx + 1)}`
      )
    }
    merge(nums, stIdx, endSubOne, endIdx)
    if(firstTime) {
      console.log(
        `Primary subarray after merge: ${nums.slice(stIdx, endIdx + 1)}`
      )
    }
  }
}

module.exports = merge
