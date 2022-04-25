const iSort = require('./insertion.sort')

let arr = [21, 6, 9, 15, 3, 11, 17]

function sandbox() {
  iSort(arr)
  console.log(arr)
}

module.exports = sandbox
