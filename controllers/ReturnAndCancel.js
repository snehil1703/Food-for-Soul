// Author Nikitha
//Controller for return and cancel component
var express = require('express');
var app = express();
var path = require('path');

// Creating instances of models
var ReturnOrder  = require('../models/ReturnOrder.js');
var CancelOrder  = require('../models/CancelOrder.js');
var Order  = require('../models/PlaceOrder.js');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Methods for return order

// this function sends form page to get return details
exports.getReturnOrderFormPage = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/ReturnOrderFormPage.html'));
}

// this function connects to model to fetch details of the order selected by the buyer to return
exports.getReturnOrderDetails = (req, res) => {
Order.findOrderDetailsById(req, res);

}

// this function connects to the model to insert the return order into database
exports.confirmReturnOrder = (req, res) => {
ReturnOrder.returnOrder(req, res);


};

// Methods for cancel order

// this function sends form page to get cancel details
exports.getCancelOrderFormPage = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/CancelOrderFormPage.html'));
}

// this function connects to model to fetch details of the order selected by the buyer to cancel
exports.getCancelOrderDetails = (req, res) => {


Order.findOrderDetailsById(req, res);

}
// this function connects to the model to insert the cancelled order into database
exports.confirmCancelOrder = (req, res) => {
CancelOrder.cancelOrder(req, res);
};
