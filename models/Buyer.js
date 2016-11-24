var express = require('express');
var app = express();
var path = require('path');

var Sequelize = require('sequelize');
var sequelize = new Sequelize('foodforsoul', 'root', 'root',{
  define: {
   timestamps: false // true by default
 }
});

var buyerRecords = sequelize.define('buyer_records', {
   buyerId: {
      type: Sequelize.INTEGER,
      field: 'buyerId',
      primaryKey: true,
      autoIncrement: true
    },
  buyerFirstName: {
      type: Sequelize.STRING,
      field: 'buyerFirstName'
    },
    buyerLastName:{
      type: Sequelize.STRING,
      field: 'buyerLastName'
    },
    buyerEmail:{
      type: Sequelize.STRING,
      field: 'buyerEmail',
    },
    buyerAddress1:{
      type: Sequelize.STRING,
      field: 'buyerAddress1',
    },
    buyerAddress2:{
      type: Sequelize.STRING,
      field: 'buyerAddress2',
    },
    buyerCity:{
      type: Sequelize.STRING,
      field: 'buyerCity',
    },
    buyerPostcode:{
      type: Sequelize.STRING,
      field: 'buyerPostcode',
    },
    buyerPassword:{
      type: Sequelize.STRING,
      field: 'buyerPassword',
    },
    buyerPhoneNumber:{
      type: Sequelize.STRING,
      field: 'buyerPhoneNumber',
    }

});



//Fetches buyer details from database
exports.findBuyerRecord = (req, res) => {
  buyerRecords.findById(2).then(function(result) {

        var x =
        {
          buyerFirstName:result.buyerFirstName,
          buyerLastName:result.buyerLastName,
          buyerEmail:result.buyerEmail,
          buyerPhoneNumber:result.buyerPhoneNumber,
          buyerAddress1:result.buyerAddress1
        };

        //This is working
        console.log(result.buyerFirstName);
        res.json(x);
  });
};



exports.updateBuyerRecords = (req, res) => {

  buyerRecords.update(
  {
    buyerFirstName: req.body.buyerFirstName,
    buyerLastName: req.body.buyerLastName,
    buyerEmail:req.body.buyerEmail,
    buyerPhoneNumber:req.body.buyerPhoneNumber,
    buyerAddress1:req.body.buyerAddress1
  },
  {
    where:
    {
      buyerId : '2'
    }
  })
  .then(function()
   {
     res.sendFile(path.join(__dirname + '/../views'+'/PersonalInformation.html'));
   })
};
