var express = require('express');
var app = express();
var path = require('path');



var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

exports.confirmReturnOrder = (req, res) => {
      console.log('this is in controllers');
      var keyName=req.query.Key;
    console.log(keyName);

  res.sendFile(path.join(__dirname + '/../views'+'/ReturnOrderConfirmPage.html'));




};


exports.confirmCancelOrder = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/CancelOrderConfirmPage.html'));

    console.log('this is in controllers');

};
