//This Model interfaces with the table cancelorder_table in the foodforsouldatabase
//maintaining the records of cancelled orders allowing to insert new cancelled orders
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// creating instance of model
var Order  = require('../models/PlaceOrder.js');

// Initializing the ORM to connect to the database
var Sequelize = require('sequelize');
var sequelize = new Sequelize('mysql://b7f2b0155047a9:7b23ad76@us-cdbr-iron-east-04.cleardb.net/heroku_636e68d7f13c57e',{
  define: {
   timestamps: false // true by default
 }
});

//creating object of cancelorder_table which will be used to map to database
var cancelorder_records = sequelize.define('cancelorder_tables', {
  orderid: {
      type: Sequelize.INTEGER,
      field: 'orderid'
    },
  reasonforcancel: {
      type: Sequelize.STRING,
      field: 'reasonforcancel'
    }

});

//Added by Nikitha --to insert new cancelled order
exports.cancelOrder= (req, res) => {
  sequelize.sync().then(function() {
    return cancelorder_records.create({
    //  orderid: req.session.id,
     orderid: req.session.orderId,
      reasonforcancel: req.body.reasonforcancel


    });
  }).then(function () {
    // connects to Order model to change the status of the order
    Order.updateOrderStatusOnCancel(req,res);
  });
};// end of cancelOrder
