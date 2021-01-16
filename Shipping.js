/**
 * This class updates and logs(?) the shipping details
 * 
 * @class
 */


const fs = require("fs");


class Shipping {

  /**
   * This function is a constructor that represents the shipping money requirements
   * 
   * 
   * @constructor
   * @param {float} fee - base fee to charge for shipping
   * @param {float} packingCost - fee to charge for packaging the product
   * @param {float} hiddenFees - "fee" to charge to maximize the money milked from unsuspecting clients
   */

  constructor(fee = 0, packingCost = 0, hiddenFees = 0) {
      this.fee = fee;
      this.packingCost = packingCost;
      this.hiddenFees = hiddenFees;

  }
 /**
   * Returns and updates the shipping fee
   * 
   * @returns {float} - float of the cost
   */
  setFee (newFee) {
    if (newFee != undefined) {
      this.fee = newFee
    }
    return this.fee
  

  }
 /**
   * Returns and updates the packing fee
   * 
   * @returns {float} - float of the cost to pack the item
   */
  setPackingCost (newPackingCost) {
    if (newPackingCost != undefined) {
      this.packingCost = newPackingCost
    }
    return this.packingCost

  }

 /**
   * Returns and updates the hidden fees
   * 
   * @returns {float} - float of the money we susessfuly scammed the customer on 
   */
  setHiddenFees (newHiddenFee) {
    if (newHiddenFee != undefined) {
      this.hiddenFees = newHiddenFee
    }
    return this.hiddenFees

  }

  // totalShippingCost () {
  //   var totalMoneys = (this.fee).parseFloat() + (this.packingCost).parseFloat() + (this.hiddenFees).parseFloat()


  // }

  /**
   * Returns and updates the sum of all shipping fees at once (excluding import taxes)
   * 
   * @returns {float} - float of the sum of the fees of shipping and scamming
   */
   totalShippingCost () {
    var totalMoneys = this.fee + this.packingCost + this.hiddenFees 
        fs.appendFile('order.txt', '\nShipping Cost: $' + totalMoneys + '\n\n\n\n', (err, data) => { 
      if (err) {
        console.log(err)
      }

    })

    return totalMoneys

  }

  
}



// export the moduleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
module.exports = Shipping