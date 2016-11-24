var express = require('express');
var app = express();
var path = require('path');

var Sequelize = require('sequelize');
var sequelize = new Sequelize('foodforsoul', 'root', 'root',{
  define: {
   timestamps: false // true by default
 }
});

var sellerRecords = sequelize.define('seller_records', {
   sellerId: {
      type: Sequelize.INTEGER,
      field: 'sellerId',
      primaryKey: true,
      autoIncrement: true
    },
  sellerFirstName: {
      type: Sequelize.STRING,
      field: 'sellerFirstName'
    },
    sellerLastName:{
      type: Sequelize.STRING,
      field: 'sellerLastName'
    },
    sellerEmail:{
      type: Sequelize.STRING,
      field: 'sellerEmail',
    },
    sellerAddress1:{
      type: Sequelize.STRING,
      field: 'sellerAddress1',
    },
    sellerAddress2:{
      type: Sequelize.STRING,
      field: 'sellerAddress2',
    },
    sellerCity:{
      type: Sequelize.STRING,
      field: 'sellerCity',
    },
    sellerPostcode:{
      type: Sequelize.STRING,
      field: 'sellerPostcode',
    },
    sellerPassword:{
      type: Sequelize.STRING,
      field: 'sellerPassword',
    },
    sellerPhoneNumber:{
      type: Sequelize.STRING,
      field: 'sellerPhoneNumber',
    }

});



//Fetches seller details from database
exports.findSellerRecord = (req, res) => {
  sellerRecords.findById(1).then(function(result) {

        var x =
        {
          sellerFirstName:result.sellerFirstName,
          sellerLastName:result.sellerLastName,
          sellerEmail:result.sellerEmail,
          sellerPhoneNumber:result.sellerPhoneNumber,
          sellerAddress1:result.sellerAddress1
        };

        //This is working
        console.log(result.sellerFirstName);
        res.json(x);
  });
};



exports.updateSellerRecords = (req, res) => {

  sellerRecords.update(
  {
    sellerFirstName: req.body.sellerFirstName,
    sellerLastName: req.body.sellerLastName,
    sellerEmail:req.body.sellerEmail,
    sellerPhoneNumber:req.body.sellerPhoneNumber,
    sellerAddress1:req.body.sellerAddress1
  },
  {
    where:
    {
      sellerId : '1'
    }
  })
  .then(function()
   {
     res.sendFile(path.join(__dirname + '/../views'+'/SellerProfile.html'));
   })
};
