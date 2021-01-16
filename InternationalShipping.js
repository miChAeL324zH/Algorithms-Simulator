const Shipping= require('./Shipping')
const fs = require("fs");

/**
 * This class extends off the shipping details class, taking import tax into account
 * 
 * @class
 */
class internationalShipping extends Shipping {

  /**
   * This function is a constructor that represents the shipping money requirements
   * 
   * 
   * @constructor
   * @param {float} fee - fee to charge for shipping
   * @param {float} packingCost - fee to charge for packaging the product
   * @param {float} hiddenFees - "fee" to charge to maximize the money milked from unsuspecting clients
   * @param {float} importTax - the cost of internationaly shipping stuff
   */

   constructor(fee = 0, packingCost = 0, hiddenFees = 0, importTax = 0) {
      super(fee, packingCost, hiddenFees)
      // this.fee = fee;
      // this.packingCost = packingCost;
      this.importTax = importTax;

  }

  /**
   * Returns and updates the tax upon the importation into forign lands
   * 
   * @returns {float} - the cost of import tax
   */
  setImportTax (taxChange) {
     if (taxChange != undefined) {
      this.importTax = taxChange
    }
    return this.importTax

  }
  /**
   * Returns and updates the sum of all shipping fees at once (including import taxes)
   * 
   * @returns {float} - float of the sum of the fees of shipping and scamming
   */
  totalInternationalShippingCost () {
    var totalMoneys = this.fee + this.packingCost + this.hiddenFees + this.importTax
    // console.log(totalMoneys)
    // console.log(this.hiddenFees)

    fs.appendFile('order.txt', '\nShipping Cost: $' + totalMoneys + '\n\n\n\n', (err, data) => { 
      if (err) {
        console.log(err)
      }

    })


    return totalMoneys

  }

}



// this is to expor the module
module.exports = internationalShipping