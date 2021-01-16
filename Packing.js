
const fs = require("fs");

/**
 * This class is utilized in regards to the shipping details
 * that of how to ship said furniture item
 * 
 * @class
 */



class Packing {

  /** 
   * This function is a contructor that represents the 
   * details in regards to shipping requirements
   * 
   * @constructor
   * @param {bool} needBox - if a box/crate is needed (default true if not specified)
   * @param {bool} needWrap - if wrapping is needed (default true if not specified)
   * @param {string} size - size of the item in words (private instance variable)
   * @param {float} weight - weight of item in kilograms (default is 0 if not specified)
   */

   constructor(needBox = true, needWrap = true, size = 0, weight = 0) {
      this.needBox = needBox;
      this.needWrap = needWrap;
      this.size = size;
      this.weight = weight;
   }



  /**
   * Returns and updates the requirements if a box is needed
   * 
   * @returns {bool} - true if a box is needed, false if it is not 
   */
  requestBox () {
    if (this.needBox == true) {
      this.needBox = true
      return this.needBox
    }

    else if (this.needBox == false) {
      this.needBox = false
      return this.needBox
    }

    // else {
    //   return 
    // }

  }


  /**
   * Returns and updates the requirements if wrapping is needed
   * 
   * @returns {bool} - true if wrapping is needed, false if it is not 
   */
  requestWrap () {
    if (this.needWrap == true) {
      this.needWrap = true
      return this.needWrap
    }

    else if (this.needWrap == false) {
      this.needWrap = false
      return this.needWrap
    }

    // else {
    //   return 
    // }

  }


  /**
   * Returns and updates the size of the item
   * 
   * @param {string} - the new size for the furniture item
   * @returns {string} - general word despription of size of the item (small/medium/large/big chungus)
   * @returns {string} - a line of complaint if the size does not co-relate with the size words (small/medium/large/big chungus)
   */
  updateSize (size) {
    if (size != undefined) {
      this.size = size
    }
    else if (this.size == 'small') {
      return 'small'
    }
    else if (this.size == 'medium') {
      return 'medium'
    }
    else if (this.size == 'large') {
      return 'large'
    }
    else if (this.size == 'big chungus') {
      return 'big chungus'
    }
    else {
      return 'Item can not have such size properties'
    }

  }


  /**
   * Returns and updates the weight in kilograms of the item
   * 
   * @param {float} - the new weight for the furniture item
   * @returns {float} - weight of the box if it is greater than zero
   * @returns {float} - a line of complaint if the item breaks the laws of physics
   */
  updateWeight (weight) {
    if (this.weight > 0) {
    
      // this.needWrap = true
      this.weight = weight
      return this.weight.toString()
    }

    else {
      return 'Item can not have such weight properties'
    }

  }

  /**
   * Returns and updates all the parameters at once, also logs to order history text file
   * 
   * @returns { string} - all the packing details in one string
   */
  allDetails () {
    var packingDetails = `Size: ${this.size} \nWeight: ${this.weight} Kg \nBox: ${this.needBox} \nWrap: ${this.needWrap}`
    
    fs.appendFile('order.txt', '\n' + packingDetails, (err, data) => { 
      if (err) {
        console.log(err)
      }

    })

    return packingDetails
  }

  
}



// explorting module
module.exports = Packing