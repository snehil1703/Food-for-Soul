var express = require('express');
var app = express();
var path = require('path');

var Sequelize = require('sequelize');
var sequelize = new Sequelize('foodforsoul', 'root', 'root',{
  define: {
   timestamps: false // true by default
 }
});

var savedCards = sequelize.define('saved_cards', {
   cardId: {
      type: Sequelize.INTEGER,
      field: 'cardID',
      primaryKey: true,
      autoIncrement: true
    },
  CardHolderName: {
      type: Sequelize.STRING,
      field: 'CardHolderName'
    },
  CardNumber:{
      type: Sequelize.STRING,
      field: 'CardNumber'
    },
    ValidTill:{
      type: Sequelize.STRING,
      field: 'ValidTill'
    }
});



exports.insertNewCard = (req, res) => {
  console.log(''+req.body.CardHolderName);
  console.log(''+req.body.CardNumber);
  console.log(''+req.body.ValidTill);
  sequelize.sync().then(function() {
    return savedCards.create({
      CardHolderName: req.body.CardHolderName,
      CardNumber: req.body.CardNumber,
      ValidTill:req.body.ValidTill
    });
  }).then(function () {
    res.sendStatus(200);
    });
};

exports.findCardRecords = (req, res) => {
  //var x =req.session.bookId;
//  console.log(x);
    savedCards.findById(req.session.cardId).then(function(result) {
      var x = {
    CardHolderName:result.CardHolderName,
    CardNumber:result.CardNumber,
    ValidTill:result.ValidTill
};
res.json(x);
  });
}

exports.findAllCardRecords = (req, res) => {
savedCards.findAll({
  // where: {
  // //  author:req.params.author
  // buyerId : '1'
  // }
}).then(function(result) {

  var x  = result;
  console.log(result.length);


   res.json(x);
});

 };

//To update payment card details
 exports.updateCardRecords = (req, res) => {

   savedCards.update(
   {
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
        console.log(req.body.cardId);
      res.sendFile(path.join(__dirname + '/../views'+'/MySavedCards.html'));
    })
 };

 //Deleting a payment card record
 exports.deleteCardForCardId = (req, res) => {
 savedCards.destroy({
   where: {
   cardId : req.session.cardId
   }
 }).then(function(result) {

res.sendStatus(200);
 });

  };
