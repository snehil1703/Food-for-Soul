var express = require('express');
var app = express();
var path = require('path');

exports.login = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/login.html'));
    console.log('this is to login');
};

exports.dashboard = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/MyDashboard.html'));
    console.log('this is to my dashboard');
};

exports.cart = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/cart.html'));
    console.log('this is to cart');
};

exports.checkout = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/checkout.html'));
    console.log('this is to checkout');
};
