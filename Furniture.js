const fs = require("fs");

/**
 * This class is utilized in regards to the 
 * creation of furniture objects,
 * and to print and log the details of a 
 * furnniture item
 * 
 * @class 
 */
class Furniture {

  /** 
   * This function is a contructor to be utilized with 
   * furniture properities
   * 
   * @constructor
   * @param {string} name - The name of said furniture item (private instance variable)
   * @param {string} material - Material of said furniture item (private instance variable)
   * @param {string} price - The associated price tag in dollars ($) 
   * of said furniture item (default is 0 if no price specified
   */

  constructor(name, material, colour, price = 0) {
      this.name= name;
      this.material = material;
      this.colour = colour;
      this.price = price;

  }

  /**
   * Returns (and updates if applicable) the name of said furniture item
   * 
   * @param {string} - New name of item
   * @returns {string} - Name of furniture item
   */
  itemName (nameChange) {
    if (nameChange != undefined) {
      this.name = nameChange
    }
    return this.name
  }


  
  
  /**
   * Returns (and updates if applicable) the material of said furniture item
   * 
   * @param {string} - New material of item
   * @returns {string} - Material furniture is made of
   */
  itemMaterial (matieralChange) {
    if (matieralChange != undefined) {
      this.material = matieralChange
    }
    return this.material
  }

  /**
   * Returns (and updates if applicable) the price of said furniture item
   * 
   * @param {float} - New price of item
   * @returns {string} - the updated price of the furniture, if price specified
   * @returns {string} - the price of the furniture
   * @returns {string} - if the price is less than/equal to zero
   * the price will return "FREE"
   */
  itemPrice(newPrice) {
    if (newPrice > 0) {
      this.price = newPrice
      return (this.price).toString()
    }
    else if (this.price >= 0) {
      return (this.price).toString()
    }
    else {
      return 'FREE'
    }
  }


   /**
   * Returns and updates all of the furniture's properties
   * 
   * @returns {string} - all the furniture details in one string
   */

  allProperties() {

    var allProperties = `Item: ${this.name}\nMaterial: ${this.material}\nColour: ${this.colour}\nPrice: $${this.price}`
    fs.appendFile('order.txt', '\n' + allProperties, (err, data) => { 
      if (err) {
        console.log(err)
      }
    })

    return allProperties
  }
}



// l'exportation de la classe du Furniture
module.exports = Furniture