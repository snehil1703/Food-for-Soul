var express = require('express');
var app = express();
var path = require('path');
var Order  = require('../models/PlaceOrder.js');



exports.myOrders = (req, res) => {
  Order.placeMyOrder(req, res);
}
