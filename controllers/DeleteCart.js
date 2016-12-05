var express = require('express');
var app = express();
var path = require('path');
var delCart  = require('../models/ShoppingCart.js');



var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));






exports.confirmDelete = (req, res) => {
  req.session.isbn= req.body.isbn;
  //console.log(req.session.isbn);
  delCart.deleteIteminCart(req, res);
  //  res.sendFile(path.join(__dirname + '/../views'+'/cart.html'));
}
