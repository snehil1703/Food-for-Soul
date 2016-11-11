var express = require('express');
var app = express();
var path = require('path');



var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

exports.confirmLogin = (req, res) => {
      console.log('this is in controllers');
  res.sendFile(path.join(__dirname + '/../views'+'/index.html'));
 console.log("Login Successful");
};

exports.register = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/register.html'));

    console.log('Cancel Order Page');

};

exports.registerSeller = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/register_seller.html'));

    console.log('Cancel Order Page');

};
exports.forgotPassword = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/forgotpassword.html'));

    console.log('Cancel Order Page');

};
