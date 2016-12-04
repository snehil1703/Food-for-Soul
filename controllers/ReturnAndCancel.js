var express = require('express');
var app = express();
var path = require('path');

var ReturnOrder  = require('../models/ReturnOrder.js');
var CancelOrder  = require('../models/CancelOrder.js');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


exports.getReturnOrderFormPage = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/ReturnOrderFormPage.html'));
}


exports.getReturnOrderDetails = (req, res) => {
  var orderDetails = {
orderid:'51',
price:'444',
deliveryStatus:'Delivered'
};
console.log('hit');

res.json(orderDetails);

}

exports.confirmReturnOrder = (req, res) => {
ReturnOrder.returnOrder(req, res);


};




//for cancel order

exports.getCancelOrderFormPage = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/CancelOrderFormPage.html'));
}


exports.getCancelOrderDetails = (req, res) => {
  var orderDetails = {
orderid:'51',
price:'444',
deliveryStatus:'Delivered'
};
console.log('hit');

res.json(orderDetails);

}

exports.confirmCancelOrder = (req, res) => {
CancelOrder.cancelOrder(req, res);


};
