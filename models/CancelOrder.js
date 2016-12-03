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

var cancelorder_records = sequelize.define('cancelorder_table', {
  orderid: {
      type: Sequelize.INTEGER,
      field: 'orderid'
    },
  reasonforcancel: {
      type: Sequelize.STRING,
      field: 'reasonforcancel'
    }

});



exports.insertReasonForCancel= (req, res) => {

  sequelize.sync().then(function() {
    return cancelorder_records.create({
    //  orderid: req.session.id,
     orderid: '51',
      reasonforcancel: req.body.reasonforcancel


    });
  }).then(function () {
  res.sendFile(path.join(__dirname + '/../views'+'/CancelOrderConfirmPage.html'));

  });


};// end of insert