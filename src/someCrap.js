/*jshint esversion: 6 */

function Houses() {
  this._houseList = {};
}


Houses.prototype.addHouse = function( name = null, {description = null, price = null, dates = []} = {}) {
  this._houseList[name] = {descrip: description, price: price, dates: dates};
};
