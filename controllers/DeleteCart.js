var express = require('express');
var app = express();
var path = require('path');



var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

exports.confirmDelete = (req, res) => {
      console.log('this is in controllers');
  res.sendFile(path.join(__dirname + '/../views'+'/cart.html'));
 console.log("Delete Successful");



};
