function Houses() {
  this.houseList = {};
}

Houses.prototype.addHouse = function(name, description, price, dates) {
  this.houseList[name] = {descrip: description, price: price, dates: dates };
};
