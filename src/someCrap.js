/*jshint esversion: 6 */

function Houses() {
  this._houseList = {};

}


// Houses.prototype.addHouse = function( name = null, {description = null, price = null, dates = []} = {}) {
//   // var dateArray = [];
//   // for (var i in dates) dateArray.push(dates[i]);
  this._houseList[name] = {descrip: description, price: price, dates: dates};
// };

Houses.prototype.addHouse = function( name = null) {
  this._houseList[name] = {};
};

Houses.prototype.addPrice = function(name, price) {
  this._houseList[name.price] = price;
};
