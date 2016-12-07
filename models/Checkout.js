//Author : Siddartha Rao Chennur
//Model file to interact with orders_records table in the database using Sequelize
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//Creating an object of nodemailer to send auto-generated emails to users
var Sequelize = require('sequelize');
  //To disable the auto-created columns- createdAt and updatedAt to be populated in the table
var sequelize = new Sequelize('foodforsoul1', 'root', 'root',{
  define: {
   timestamps: false // true by default
 }
});

var cartAddress = sequelize.define('buyer_records', {

	buyerID: {
		type: Sequelize.STRING,
      field: 'buyerID',
	  primaryKey: true
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
      field: 'buyerEmail'
    },
	buyerAddress1: {
      type: Sequelize.STRING,
      field: 'buyerAddress1'
    },
    buyerAddress2:{
      type: Sequelize.STRING,
      field: 'buyerAddress2'
    },
    buyerCity:{
      type: Sequelize.STRING,
      field: 'buyerCity'
    },
	buyerPostcode:{
      type: Sequelize.STRING,
      field: 'buyerPostcode'
    },
	buyerPassword: {
      type: Sequelize.STRING,
      field: 'buyerPassword'
    }
});

// this method finds address of a particular user and displays in UI
exports.findAddress = (req, res) => {
//var check =   JSON.parse(req.body);
cartAddress.findAll({
  where: {
  buyerEmail : req.session.emailID
  }
}).then(function(result) {
  var x  = result;
  res.json(x);
});
};


var cartCard = sequelize.define('saved_cards', {

	cardId: {
		type: Sequelize.STRING,
      field: 'cardId',
      primaryKey: true
	},
  CardHolderName: {
		type: Sequelize.STRING,
      field: 'CardHolderName'
	},
   CardNumber: {
      type: Sequelize.STRING,
      field: 'CardNumber'
    },
    ValidTill:{
      type: Sequelize.STRING,
      field: 'ValidTill'
    },
    emailId: {
		type: Sequelize.STRING,
      field: 'emailId'
	}
});


// this method finds card details of a particular user and displays in UI
exports.findCard = (req, res) => {
//var check =   JSON.parse(req.body);
cartCard.findAll({
  where: {
  emailId : req.session.emailID
  }
}).then(function(result) {
  var x  = result;
  res.json(x);
});
};
