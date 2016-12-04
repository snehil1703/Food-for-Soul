//Author - Prasandeep Singh
//Model file to interact with seller_records table in the database using Sequelize

var express = require('express');
var app = express();
var path = require('path');

//Declaring a variable of Sequelize
var Sequelize = require('sequelize');
var sequelize = new Sequelize('foodforsoul', 'root', 'root',
{
  //To disable the auto-created columns- createdAt and updatedAt to be populated in the table
  define:
  {
      timestamps: false // true by default
  }
});


//To define metadata fields for seller_records table
var sellerRecords = sequelize.define('seller_records',
{
   sellerId:
   {
      type: Sequelize.INTEGER,
      field: 'sellerId',
      primaryKey: true,
      autoIncrement: true
   },
  sellerFirstName:
  {
      type: Sequelize.STRING,
      field: 'sellerFirstName'
  },
  sellerLastName:
  {
      type: Sequelize.STRING,
      field: 'sellerLastName'
  },
  sellerEmail:
  {
      type: Sequelize.STRING,
      field: 'sellerEmail',
  },
  sellerAddress1:
  {
      type: Sequelize.STRING,
      field: 'sellerAddress1',
  },
  sellerAddress2:
  {
      type: Sequelize.STRING,
      field: 'sellerAddress2',
  },
  sellerCity:
  {
      type: Sequelize.STRING,
      field: 'sellerCity',
  },
  sellerPostcode:
  {
      type: Sequelize.STRING,
      field: 'sellerPostcode',
  },
  sellerPassword:
  {
      type: Sequelize.STRING,
      field: 'sellerPassword',
  },
  sellerPhoneNumber:
  {
      type: Sequelize.STRING,
      field: 'sellerPhoneNumber',
  }
});


//Fetches a particular seller details from database
//Pre-conditions   --> Takes input request from the sellerProfile function of Buyer Dashboard Controller
//Post-conditions  --> Fetches information of a particular seller from the database and returns the response to success function of sellerProfile.html page
exports.findSellerRecord = (req, res) =>
{
  sellerRecords.findById(1).then(function(result)
  {
        var x =
        {
          sellerFirstName:result.sellerFirstName,
          sellerLastName:result.sellerLastName,
          sellerEmail:result.sellerEmail,
          sellerPhoneNumber:result.sellerPhoneNumber,
          sellerAddress1:result.sellerAddress1
        };

        res.json(x);
  });
};


//Changes and updates seller profile information of a particular seller to the database
//Pre-conditions   --> Takes input request from the updateSeller function of Seller Dashboard Controller
//Post-conditions  --> Updates information of a particular seller to the database and returns the response to success function of SellerProfile.html page
exports.updateSellerRecords = (req, res) =>
{
  sellerRecords.update
  ({
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
