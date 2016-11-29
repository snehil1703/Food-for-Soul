var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var Sequelize = require('sequelize');
var sequelize = new Sequelize('foodforsoul', 'root', 'root',{
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



exports.insertReasonForReturn = (req, res) => {

  sequelize.sync().then(function() {
    return returnorder_records.create({
    //  orderid: req.session.id,
     orderid: '51',
      reasonforreturn: req.body.reasonforreturn


    });
  }).then(function () {
  res.sendFile(path.join(__dirname + '/../views'+'/ReturnOrderConfirmPage.html'));

  });


};
