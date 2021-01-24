// may not work properly outside of repl.it
// Hello. Changes is marked in Github fashion. https://github.com/miChAeL324zH/Algorithms-Simulator
console.log('Hewwo world!!!')

const fs = require("fs");
const Packing = require('./Packing')
const Furniture = require('./Furniture')
const Shipping = require('./Shipping')
const International_Shipping = require('./InternationalShipping')


function orderThingy(clientFirstName, inputNumber) {
  /**
   * Order taking.
   * 
   * This function takes the person's order and updates order values within the program
   * 
   * @param {string} Name of the client
   * @param {integer} The item number of the order
   * 
   * @return none
   */
  
  clientName = clientFirstName
  name = inputNumber * 4
  material = inputNumber * 4 + 1
  colour = inputNumber * 4 + 2
  price = inputNumber * 4 + 3
}



let initialDataStorage = []

let currentStock = []

// read from txt, copy, parse, put into currentStock array
// const stockReader = fs.readFileSync('stock.txt')
const stockReader = fs.readFileSync('miniStock.txt')

parseStock = ((stockReader.toString().replace(/(\r\n|\n|\r)/gm,"")).split(", "));
initialDataStorage = parseStock.concat()
// console.log(currentStock)
// console.log(initialDataStorage)

let clientName = ''
let name = ''
let material = ''
let colour = ''
let price = ''
let itemNumber = 0



for (i in initialDataStorage) { // throw stuff from txt into array

  if (Number.isInteger(i/4) && i != 0) {
    orderThingy('Set Up Program', i/4)
    
    var attachPropertyToFurniture = new Furniture(initialDataStorage[name], initialDataStorage[material], initialDataStorage[colour], parseFloat(initialDataStorage[price]))

    currentStock.push(attachPropertyToFurniture)
  }
}


console.log('We currenly can ship these things\n')
for (i in currentStock) { // throw stuff from txt into array
  console.log(`${i}: ${currentStock[i].name}`)

  if (i > 20) { // limit display of items
    break
  }
}

var bobOrder = 0
var bobOrder2 = 4
var bobbetteOrder = 3

console.log('\n\n\n\n\n\n')















// Bob wants a Boring sofa

console.log('')
console.log('==============++++++++++++++==============')
orderThingy('Bob', bobOrder)

if (currentStock[itemNumber].name != undefined && currentStock[itemNumber].name !=''){ // check if item is avalible

  itemNumber = 0 + bobOrder
  // console.log(itemNumber)
  // itemNumber = itemNumber - 1
  let furnitureDetails = new Furniture(currentStock[itemNumber].name, currentStock[itemNumber].material, currentStock[itemNumber].colour, currentStock[itemNumber].price)
  var packingRequirmemt = new Packing()
  var shipping = new Shipping()
  var handleinternationalShipping = new International_Shipping()

  packingRequirmemt= new Packing(true, false,'big chungus', 60)
  shipping = new Shipping(1, 2, 3)

  // edit then print client order
  console.log(clientName)
  console.log('')
  console.log('Order edits:')
  console.log(`Price has been updated to: $${furnitureDetails.itemPrice(4999.99)}`)
  console.log(`Weight has been updated to: ${packingRequirmemt.updateWeight(60 + 10)} Kg`) // packing requires additional 10kg weight


  fs.appendFile('order.txt', clientName, (err, data) => { 
    if (err) {
      console.log(err)
    }})
  console.log('\n---- Final Shipping Details ----')
  console.log(furnitureDetails.allProperties())
  console.log(packingRequirmemt.allDetails())
  console.log(`Shipping Cost: $${shipping.totalShippingCost()}`)
  console.log('---- Final Shipping Details ----')
}

else {
  console.log("Will not ship, item is not found in the database")
}
console.log('==============++++++++++++++==============\n')





// console.log(currentStock)
console.log('Ayyyyoooo! Some of the properties of the Bwokshwelf are wrong!\n')
let findTheCorruption = currentStock.find(findTheCorruption => findTheCorruption.name === "Bwokshwelf") // find the thing in array
// let indexOfCorruption = currentStock.indexOf(findTheCorruption)

if (findTheCorruption != undefined) {

  furnitureDetails = new Furniture(findTheCorruption.name, findTheCorruption.material, findTheCorruption.colour, parseFloat(findTheCorruption.price))
  console.log('\nFound coruption! Correcting!')
  console.log(findTheCorruption)
  
// assign new values, then apply
  furnitureDetails.itemName('Bookshelf')
  furnitureDetails.itemMaterial('Wood')
  findTheCorruption.name = furnitureDetails.itemName()
  findTheCorruption.material = furnitureDetails.itemMaterial()
//  findTheCorruption.colour = furnitureDetails.itemColour()
  findTheCorruption.price = parseFloat(furnitureDetails.itemPrice())

  console.log("\nNew properties:")
  console.log(findTheCorruption)
  console.log('\nCorreted!\n')
}

  // console.log(currentStock)




// Bobette wants a Bookshelf, as per request, the bookshelf will be damaged in shipping protectionsfor for asthetic purposes

console.log('==============++++++++++++++==============')
orderThingy('Bobette', bobbetteOrder)
console.log(clientName)


if (currentStock[itemNumber].name != undefined && currentStock[itemNumber].name !=''){ // check if item is avalible
  itemNumber = 0 + bobbetteOrder
// console.log(itemNumber)
  furnitureDetails = new Furniture(currentStock[itemNumber].name, currentStock[itemNumber].material, currentStock[itemNumber].colour, currentStock[itemNumber].price)
  packingRequirmemt = new Packing(false, false,'small', 15.69)
  handleinternationalShipping = new International_Shipping(10, 0, 3, 0)

  console.log('')
  console.log('Order edits:')

  console.log(`A $${handleinternationalShipping.setImportTax(12)} is require for international shipping to France`)
  console.log(`The customer request a last minute size change, the new size is:`)
  packingRequirmemt.updateSize('large')
  console.log(packingRequirmemt.updateSize())
  handleinternationalShipping.setHiddenFees(30) // shady business tactics


  fs.appendFile('order.txt', clientName, (err, data) => { 
    if (err) {
      console.log(err)
    }
  })
  console.log('\n---- Final Shipping Details ----')
  console.log(furnitureDetails.allProperties())
  console.log(packingRequirmemt.allDetails())
  console.log(`Shipping Cost: $${handleinternationalShipping.totalInternationalShippingCost()}`)
  console.log('---- Final Shipping Details ----')
}

else {
  console.log("Will not ship, item is not found in the database")
}

console.log('==============++++++++++++++==============\n')





//bob also wants the new white out that may or may not be avalible
console.log('')
console.log('==============++++++++++++++==============')
orderThingy('Bob', bobOrder2)
console.log(clientName)
itemNumber = 0 + bobOrder2

try {

  var checkForItem = currentStock[itemNumber].name

  furnitureDetails = new Furniture(currentStock[itemNumber].name, currentStock[itemNumber].material, currentStock[itemNumber].colour, currentStock[itemNumber].price)
  packingRequirmemt = new Packing(true, false,'small', 0.01)
  shipping = new Shipping(2, 0, 15)

  // edit then print client order

  console.log('')
  console.log('Order edits:')


  fs.appendFile('order.txt', clientName, (err, data) => { 
    if (err) {
      console.log(err)
    }})
  console.log('\n---- Final Shipping Details ----')
  console.log(furnitureDetails.allProperties())
  console.log(packingRequirmemt.allDetails())
  console.log(`Shipping Cost: $${shipping.totalShippingCost()}`)
  console.log('---- Final Shipping Details ----')
}

catch {
  console.log("Will not ship, item is not found in the database")
}

console.log('==============++++++++++++++==============\n')






// a new shipment of white out has arrived, re-run the program if you want to satisfy bob's second order
let nameInput = "Ella Áki Fulvio Ramiz's PREMIUM white out"
let materialInput = 'White stuff'
let colourInput = 'Flashbang White'
let priceInput = '248'

furnitureDetails = new Furniture(nameInput, materialInput, colourInput, priceInput)


if (!((stockReader.toString()).includes(furnitureDetails.name))) {  //check if the thing already added
  fs.appendFile('stock.txt', ` \n${furnitureDetails.name}, ${furnitureDetails.material}, ${colourInput}, ${priceInput},`, (err, data) => {
  })
}



// /**
//  * to return stock.txt to original state, copy 
//  * contents of MASTER LIST STOCK and replace all 
//  * in stock.txt
//  */






































console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
console.log('================ The algorithms task begins here ================')



function bubbleSort(array) {
 

  /**
   * Sorts a given array with the bubble sort method
   * 
   * @param {object} An array
   * 
   * @return {object} An array sorted from smallest to greatest
   * 
   */
 
  let indexNumber = 0
  let copiedArray = []
  copiedArray = array.concat()
  let changeCount = 0
  let itemA = copiedArray[indexNumber]
  let itemB = copiedArray[indexNumber + 1]
  // let passNumber = 1

  
  while (true) {

    itemA = copiedArray[indexNumber]
    itemB = copiedArray[indexNumber + 1]

    if (indexNumber + 1 >= parseFloat(copiedArray.length)) {
      indexNumber = 0
      changeCount = 0
      passNumber += 1
      // console.log('Pass #' + passNumber)
    }

    else if (parseFloat(itemA.price) <= parseFloat(itemB.price)) {
      indexNumber += 1
      // console.log('no changes')
    }

    else if (parseFloat(itemA.price) > parseFloat(itemB.price)) {
      copiedArray.splice(indexNumber, 1, itemB)
      copiedArray.splice(indexNumber + 1, 1, itemA)
      indexNumber += 1
      changeCount +=1 
      // console.log('swap order')
    }

    if (changeCount <= 0 && indexNumber + 1 >= parseFloat(copiedArray.length)) {
      //if there are no changes in a completed pass, it is sorted
      break
    }
  }
  return copiedArray
}




function insertionSort(array) {
 
  /**
   * Sorts a given array with the insertion method
   * 
   * @param {object} An array
   * 
   * @return {object} An array sorted from smallest to greatest
   * 
   */
  

  let copiedArray = []
  let indexNumber = 0
  let index = 0
  let itemA = copiedArray[indexNumber]
  let itemB = copiedArray[indexNumber + 1]


  indexNumber = 0
  index = indexNumber
  copiedArray = array.concat()

  while (true) {
    itemA = copiedArray[indexNumber]
    itemB = copiedArray[indexNumber + 1]
    index = indexNumber

    if (parseFloat(itemA.price) > parseFloat(itemB.price)) { // check if it is already in order
      while(true) {


        itemA = copiedArray[index]
        itemB = copiedArray[index + 1]

        if (parseFloat(itemA.price) != undefined && parseFloat(itemB.price) != undefined && parseFloat(itemA.price) > parseFloat(itemB.price)) { // ensure the swapping action does not corrupt the array contents
          copiedArray.splice(index, 1, itemB)
          copiedArray.splice(index + 1, 1, itemA)
          // console.log('swapped')
        }
        index -= 1
      }
    }


    indexNumber += 1
    // console.log(indexNumber / copiedArray.length *100 + '%') // print out progress 

    if (indexNumber + 1>= copiedArray.length) {
      // if the end of the array is hit, stop.
      break
    }
  }
  // Hmmm. You were correct about there being excessive things going on.
  return copiedArray
}


function linearSearch(array, thingToSearch) {
  /**
   * Searches for a thing inside a given array with the linear search method
   * 
   * @param {array} An array
   * @param {float} The number to search for
   * 
   * @return {number} The index of the item in the array
   * @return {number} -1 if the item is not found
   * 
   */

  for (i in array) {
    // console.log(i)
    if (array[i].price == thingToSearch) {
      return parseInt(i)
    }
  }
  return -1
}

function binarySearch(array, thingToSearch) {
  /**
   * Searches for a thing inside a given array with the binary search method
   * 
   * @param {array} An array
   * @param {float} The number to search for
   * 
   * @return {number} The index of the item in the array
   * @return {number} -1 if the item is not found
   * 
   */
  let sortedArray = insertionSort(array)
  
  let front = 0
  let rear = sortedArray.length
  // console.log(sortedArray)
  let currentIndex = Math.floor((array.length / 2))

  while(front <= rear) {
    currentIndex = Math.floor((front + rear) /2)

    if (sortedArray[currentIndex].price > thingToSearch) { // take lower half
      rear = currentIndex - 1 
    }

    else if (sortedArray[currentIndex].price < thingToSearch) { // take upper half
      front = currentIndex + 1
    }

    else {
      return currentIndex 
    }
   }
   return -1
}



















  function recursiveAddition(number, arrayOfNumbers = ['placeholder'], index = 0) {

    if (arrayOfNumbers.length == 0) {
      return number;
    } 
    
    else {
      if (arrayOfNumbers == 'placeholder') {
        arrayOfNumbers = number.split('')
        number = 0
      }

      // add the value of the last index to the 'number', then delete that value in the arrayOfNumbers
      return recursiveAddition(number = parseFloat(number) + parseFloat(arrayOfNumbers[arrayOfNumbers.length - 1]), arrayOfNumbers = arrayOfNumbers.slice(0, arrayOfNumbers.length - 1), index + 0)
    }
  }



function addition(numberToOperateUpon) {

  let arrayOfNumbers = numberToOperateUpon.split('')
  // console.log(arrayOfNumbers)
  let number = 0

  for (i in arrayOfNumbers) {
    // console.log(i)
    number += parseFloat(arrayOfNumbers[i])
  }
  return number
}



function palindromes(wordToOperateUpon) {
  let palindromeCount = 0
  let arrayOfLetters = wordToOperateUpon.split('')
  let pivotPoint = parseFloat(Math.floor(arrayOfLetters.length / 2))
  let indexToOneSide = 1
  // console.log(arrayOfLetters)
  // console.log(arrayOfLetters[pivotPoint]) // sanity checks


  while (true) {

    if (arrayOfLetters[pivotPoint + indexToOneSide].toLowerCase() == arrayOfLetters[pivotPoint - indexToOneSide].toLowerCase()) {
      palindromeCount += 1
    }

    indexToOneSide += 1
    
    if (indexToOneSide + pivotPoint >= arrayOfLetters.length) {
      break
    }
  }
  return palindromeCount
}

function recursivePalindromes(wordToOperateUpon, palindromeCount = 0, indexToOneSide = 1) {
  let arrayOfLetters = wordToOperateUpon.split('')
  let pivotPoint = parseFloat(Math.floor(arrayOfLetters.length / 2))
  // console.log(arrayOfLetters)
  // console.log(arrayOfLetters[pivotPoint])


  if (indexToOneSide + pivotPoint >= arrayOfLetters.length) { // if the end of the array is hit, there is no more letter to process
    return palindromeCount;
  } 

  else {
    if (arrayOfLetters[pivotPoint + indexToOneSide].toLowerCase() == arrayOfLetters[pivotPoint - indexToOneSide].toLowerCase()) {
      return recursivePalindromes(wordToOperateUpon, palindromeCount += 1, indexToOneSide += 1)
    }

    return recursivePalindromes(wordToOperateUpon, palindromeCount = palindromeCount, indexToOneSide += 1)
  }
}














// run sorts and searches, log to file

let startTime = new Date()
let endTime = new Date()
let priceToSearchFor = 248
let currentStockForSorting = []

currentStockForSorting = currentStock.concat()
console.log(currentStockForSorting)
console.log('================ This is the original array above ================')



console.log('\n\n\n\n')
console.log('================ .sort() sort ================')

startTime = new Date()

  console.log(currentStockForSorting.sort((a,b) => {
return a.price - b.price
}))
endTime = new Date()
// console.log((endTime - startTime)/ 60000 + 'Minutes')



fs.appendFile('results.txt', '\n.sort() sort took ' + (endTime - startTime) + 'Ms', (err, data) => { 
  if (err) {
    console.log(err)
  }
})





console.log('\n\n\n\n')
console.log('================ Bubble sort ================')

startTime = new Date()
console.log(bubbleSort(currentStockForSorting))
endTime = new Date()
// console.log((endTime - startTime)/ 60000 + 'Minutes')



fs.appendFile('results.txt', '\nBubble sort took ' + (endTime - startTime) + 'Ms', (err, data) => { 
  if (err) {
    console.log(err)
  }
})



console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
console.log('================ Insertion sort ================')

startTime = new Date()
let sortedArrayForBinarySearch = insertionSort(currentStockForSorting)
// console.log(insertionSort(currentStockForSorting, 'price'))
console.log(sortedArrayForBinarySearch)
endTime = new Date()
// console.log((endTime - startTime)/ 60000 + 'Minutes')

fs.appendFile('results.txt', '\nInsertion sort took ' + (endTime - startTime) + 'Ms', (err, data) => { 
  if (err) {
  console.log(err)
  }
})



console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
console.log('================ Linear search ================')

startTime = new Date()
console.log(linearSearch(currentStockForSorting, priceToSearchFor))
console.log('Price of' + priceToSearchFor + 'is at index # ^^^')
endTime = new Date()



fs.appendFile('results.txt', '\nLinear search took ' + (endTime - startTime) + 'Ms', (err, data) => { 
  if (err) {
    console.log(err)
  }
})




console.log('\n\n\n\n\n')
console.log('================ Binary search ================')

startTime = new Date()
console.log(binarySearch(currentStockForSorting, priceToSearchFor))
console.log('Price of' + priceToSearchFor + 'is at index # ^^^')
endTime = new Date()

fs.appendFile('results.txt', '\nBinary search (without the time taken sorting) took ' + (endTime - startTime) + 'Ms', (err, data) => { 
  if (err) {
    console.log(err)
  }
})






console.log('\n\n\n\n\n')
console.log('================ Regular search ================')

startTime = new Date()
let regularSearch = currentStockForSorting.find(a => a.price = priceToSearchFor)
console.log(regularSearch)
console.log('Price of' + priceToSearchFor + 'is at index # ^^^')
endTime = new Date()

fs.appendFile('results.txt', '\nRegular search took ' + (endTime - startTime) + 'Ms', (err, data) => { 
  if (err) {
    console.log(err)
  }
})


/** 
 * recursion slum
 */
console.log('\n\n\n\n')
let numberGivenToDoDemonstrateRecursion = '2618452'
console.log('What happens if you take the numbers of ' + numberGivenToDoDemonstrateRecursion + ' and added them all together?')
console.log('You get: ' + recursiveAddition(numberGivenToDoDemonstrateRecursion))

console.log('\n\n\n\n')
console.log('What happens if you take the numbers of ' + numberGivenToDoDemonstrateRecursion + ' and added them all together? (No recursion)')
console.log('You get: ' + addition(numberGivenToDoDemonstrateRecursion))

console.log('\n\n\n\n')
console.log('There are ' + palindromes('lrAcEcARI') + ' palindromes in "lrAcEcARI"')
console.log('There are ' + recursivePalindromes('EpOkayAkop') + ' palindromes in "EpOkayAkop"')


// i use this to generate more data for the sorting greater than 2mb of data part

/** 
let count = 0
let appendString = ''
while (count <= 100000) {

  nameInput = 'random item' + count
  materialInput = 'material' + count
  colourInput = 'colour' + count
  priceInput = (Math.random() * (1000)).toFixed(2)

  furnitureDetails = new Furniture(nameInput, materialInput, colourInput, priceInput)
  appendString = appendString + ` \n${furnitureDetails.name}, ${furnitureDetails.material}, ${colourInput}, ${priceInput},`
  count += 1
}

fs.appendFile('stock.txt', appendString, (err, data) => {
})
*/