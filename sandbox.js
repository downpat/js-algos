const merge = require('./merge.sort')
const mergeSort2 = require('./merge2.sort')

let sortedTwoInOne = [3, 4, 7, 9, 2, 3, 6, 10, 11]

let sortedOne = [3, 4, 7, 9]
let sortedTwo = [2, 3, 6, 10, 11]

let unsorted = [15, 6, 31, 3, 3, 4, 1, 2, 18, 15, 18, 9]

function sandbox() {
  let sorted = mergeSort2(unsorted)
  console.log(`MergeSort 2 Results: ${sorted}`)
}

sandbox()

module.exports = sandbox
