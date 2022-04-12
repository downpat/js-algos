//Require utilities
const utils = require('./utils')
const intComp = utils.intComp
const randArray = utils.randArray
const cpA = utils.cpA

//Require sort algos
const sortAlgos = [
  require('./jslib.sort'),
  require('./insertion.sort')
]


sortAlgos.forEach((algo) => {
  test(`ensures ${algo.name} sorts correctly`, () => {
    //Create random arrays of integers, one big, one small
    let unsortedSmall = randArray(10, 100)
    let unsortedBig = randArray(100, 10000000)
    
    //Log the algorithm to the console in action
    console.log(`Small unsorted start: ${unsortedSmall}`)
    console.log(`Small sort by ${algo.name}: ${algo(cpA(unsortedSmall))}`)
    console.log(`Small sort by .sort(): ${cpA(unsortedSmall).sort(intComp)}`)
    console.log(`Small unsorted finish: ${unsortedSmall}`)

    //Test that the given sorting algorithm is correct
    expect(algo(cpA(unsortedSmall))).toEqual(unsortedSmall.sort(intComp))
    expect(algo(cpA(unsortedBig))).toEqual(unsortedBig.sort(intComp))
  })
})

//todo: write a test that measures speed/complexity
