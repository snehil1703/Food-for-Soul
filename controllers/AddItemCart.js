var express = require('express');
var app = express();
var path = require('path');
var Cart  = require('../models/ShoppingCart.js');
var Check  = require('../models/Checkout.js');
var dialog = require('dialog');

exports.getAllItems = (req, res) => {
  Cart.findAllCartRecords(req, res);
}

exports.getAddress = (req, res) => {
  Check.findAddress(req, res);
}

exports.getCard = (req, res) => {
  Check.findCard(req, res);
}

exports.updateCart = (req, res) => {
  Cart.updateCartTable(req, res);
}

exports.viewcart = (req, res) => {
  if(!req.session.emailID){
    res.send('notloggedin');
  }
  else {
    res.sendFile(path.join(__dirname + '/../views'+'/cart.html'));
  }
};

exports.addingToCart = (req, res) => {
  if(!req.session.emailID){
    res.send('notloggedin');
  }
  else{
     res.send('loggedin');
     Cart.toCart(req, res);
  }
}
exports.gotocart = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/cart.html'));
}
