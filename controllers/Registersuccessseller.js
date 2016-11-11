var express = require('express');
var app = express();
var path = require('path');



var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

exports.confirmRegistration = (req, res) => {
      console.log('this is in controllers');
  res.sendFile(path.join(__dirname + '/../views'+'/registersuccessseller.html'));
 console.log("Registration Successful");



 
};
