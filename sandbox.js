const mergeSort = require('./merge.sort')

let unsorted = [3, 1, 15, 11, 4, 9, 12, 16, 6]

function sandbox() {
  mergeSort(unsorted)
  console.log(unsorted)
}

sandbox()

module.exports = sandbox
