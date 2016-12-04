var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var Order  = require('../models/Order.js');

var Sequelize = require('sequelize');
var sequelize = new Sequelize('foodforsoul', 'root', 'mysqlroot',{
  define: {
   timestamps: false // true by default
 }
});

var returnorder_records = sequelize.define('returnorder_table', {
  orderid: {
      type: Sequelize.INTEGER,
      field: 'orderid'
    },
  reasonforreturn: {
      type: Sequelize.STRING,
      field: 'reasonforreturn'
    }

});



exports.returnOrder = (req, res) => {

  sequelize.sync().then(function() {
    return returnorder_records.create({
    //  orderid: req.session.id,
     orderid: '51',
      reasonforreturn: req.body.reasonforreturn


    });
  }).then(function () {

Order.updateOrderStatusOnReturn(req,res);
//  res.sendFile(path.join(__dirname + '/../views'+'/ReturnOrderConfirmPage.html'));

  });


};
