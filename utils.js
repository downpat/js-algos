let mod = {}

/**
 * Used with Array.prototype.sort() to compare
 * integers
 *
 * firstInt - The first integer for the comparison
 * secondInt - The second integer for the comparison
 */
mod.intComp = (firstInt, secondInt) => {
  if( !Number.isInteger(firstInt) || !Number.isInteger(secondInt) ) {
    throw TypeError('intCompare requires two integers as arguments')
  }
  if( firstInt < secondInt ) {
    return -1
  }
  if( firstInt > secondInt ) {
    return 1
  }
  return 0
}

/**
 * Takes an array length and a max integer size
 * and returns an unsorted array of integers
 * of the given length
 *
 * arrLength - the length of the returned array
 * maxInt - the maximum size of an integer in the
 *          returned array
 */
mod.randArray = (arrLength,  maxInt) => Array.from(
  { length: arrLength },
  () => Math.floor(Math.random() * maxInt)
)

/**
 * Deep copies an array to a new array
 */
mod.cpA = (arr) => Array.from(arr)

module.exports = mod
