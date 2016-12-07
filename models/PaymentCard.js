//Author - Prasandeep Singh
//Model file to interact with saved_cards table in the database using Sequelize

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


//To define metadata fields for saved_cards table
var savedCards = sequelize.define('saved_cards',
{
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


//Adds new Payment card details to the database
//Pre-conditions   --> Takes input request from the newCard function of Buyer Dashboard Controller
//Post-conditions  --> Inserts new payment card details into the database and returns the response to success function of MySavedCards.html page
exports.insertNewCard = (req, res) =>
{
    sequelize.sync().then(function()
    {
        return savedCards.create
        ({
            CardHolderName: req.body.CardHolderName,
            CardNumber: req.body.CardNumber,
            ValidTill:req.body.ValidTill,
			      emailId: req.session.emailID
        });
    })
    .then(function ()
    {
        res.sendStatus(200);
    });
};


//Fetches a particular payment card details from database
//Pre-conditions   --> Takes input request from the getCard function of Buyer Dashboard Controller
//Post-conditions  --> Fetches information of a particular payment card from the database and returns the response to success function of MySavedCards.html page
exports.findCardRecords = (req, res) =>
{
    savedCards.findById('2').then(function(result)
    {
        var x =
        {
            CardHolderName:result.CardHolderName,
            CardNumber:result.CardNumber ,
            ValidTill:result.ValidTill
        };
        res.json(x);
    });
}


//Fetches a list of all payment cards of a particular buyer from database
//Pre-conditions   --> Takes input request from the getAllCards function of Buyer Dashboard Controller
//Post-conditions  --> Fetches payment cards details from the database and returns the response to success function of MySavedCards.html page
exports.findAllCardRecords = (req, res) =>
{
    savedCards.findAll
    ({
      emailId: req.session.emailID
    })
    .then(function(result)
    {
        var x  = result;
        res.json(x);
    });
};


//Changes and updates Payment card information of a particular buyer to the database
//Pre-conditions   --> Takes input request from the updateCard function of Buyer Dashboard Controller
//Post-conditions  --> Updates payment card details information of  particular admin to the database and returns the response to success function of MySavedCards.html page
 exports.updateCardRecords = (req, res) =>
 {
    savedCards.update
    ({
        CardHolderName: req.body.CardHolderName,
        CardNumber: req.body.CardNumber,
        ValidTill:req.body.ValidTill,
     },
     {
        where:
        {
            cardId : req.session.cardId
        }
      })
     .then(function()
     {
          res.sendFile(path.join(__dirname + '/../views'+'/MySavedCards.html'));
    })
 };


 //Delete the selected paymentCard from database
 //Pre-conditions   --> Takes input request from the deleteCardForCardId function of Buyer Dashboard Controller
 //Post-conditions  --> Deletes payment Card details from the database and returns the response to success function of MySavedCards.html page
exports.deleteCardForCardId = (req, res) =>
{
    savedCards.destroy
    ({
        where:
        {
            cardId : req.session.cardId
        }
    })
    .then(function(result)
    {
        res.sendStatus(200);
    });
};
