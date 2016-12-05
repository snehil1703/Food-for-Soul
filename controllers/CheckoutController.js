var express = require('express');
var app = express();
var path = require('path');
var PaymentCheck = require('../models/Payment.js');


var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

exports.checkoutConfirm = (req, res) => {
  console.log('this is in controllers');
  PaymentCheck.confirmPayment(req, res);
  res.sendFile(path.join(__dirname + '/../views'+'/paymentsuccess.html'));
 console.log("checkout Successful");
};


exports.checkoutcart = (req, res) => {
  if(!req.session.emailID){
    res.send('notloggedin');
  }
  else {
    res.sendFile(path.join(__dirname + '/../views'+'/checkout.html'));
  }
};

exports.gotocheckout = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/checkout.html'));
}
