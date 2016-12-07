//Author Snehil Vishwakarma--- Controller for Path Resolution to different pages from Home Page

var express = require('express');
var app = express();
var path = require('path');

// To route to Login Page
//Pre-conditions   --> Need to be on Home Page
//Post-conditions  --> Routes to the Register/Login Page

exports.login = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/login.html'));
    console.log('this is to login');
};

// To route to Buyer Dashboard Page
//Pre-conditions   --> Need to be on Home Page
//Post-conditions  --> Routes to the My Dashboard(if already logged in) or goes to Register/Login Page (if not Logged in)

exports.dashboard = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/MyDashboard.html'));
    console.log('this is to my dashboard');
};

// To route to the Cart Page where all your products to buy are kept
//Pre-conditions   --> Need to be on Home Page
//Post-conditions  --> Routes to the Cart Page(if already logged in) or goes to Register/Login Page (if not Logged in)

exports.cart = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/cart.html'));
    console.log('this is to cart');
};

// To route to the Checkout Page where all your oders are ready to be ordered
//Pre-conditions   --> Need to be on Home Page
//Post-conditions  --> Routes to the Checkout Page(if already logged in) or goes to Register/Login Page (if not Logged in)

exports.checkout = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/checkout.html'));
    console.log('this is to checkout');
};

// To route to the Product Information page
//Pre-conditions   --> Need to be on Home Page
//Post-conditions  --> Routes to the Product Page

exports.product = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/product.html'));
    console.log('this is to product');
};

exports.homepage = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/index.html'));
    console.log('this is to home');
};
