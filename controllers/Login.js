var express = require('express');
var app = express();
var path = require('path');
//var db = require('../models');


var LoginSuccess  = require('../models/LoginCheck.js');


var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

exports.confirmLogin = (req, res) => {
      LoginSuccess.login(req, res);
      console.log('this is in controllers');
      console.log("Login Successful");
};

exports.confirmLogout = (req, res) => {
    req.session.destroy();
    res.sendFile(path.join(__dirname + '/../views'+'/index.html'));
    console.log(req.session.emailID);
    console.log("Logout Successful");
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

exports.getProductPage = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/product.html'));

    console.log('Cancel Order Page');

};


exports.checkuserlogin = (req, res) => {
  if (req.session.isUserLoggedIn=='true')
  {
    res.send(req.session.isUserLoggedIn);
}
else
{
    res.send('LoggedOut');
}
}
