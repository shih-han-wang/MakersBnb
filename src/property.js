'use strict';

var Property = function(){
  this._name = "";
  this._description = "";
  this._price = 0;
  this._availableDate = [];
};

Property.prototype.addName = function (name) {
  this._name = name
};

Property.prototype.addDescription = function (description) {
  this._description = description
};

Property.prototype.addPrice = function (price) {
  this._price = price
};

Property.prototype.addavailableDate = function (date) {
  this._availableDate.push(date)
};
