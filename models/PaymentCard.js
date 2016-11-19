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
    console.log('Admin Added');
    //res.status(200);
  //res.sendFile(path.join(__dirname + '/../views'+'/InventoryBookAddedConfirmPage.html'));
  });


};
//
// exports.findBookRecords = (req, res) => {
//     bookrecords.findById(req.params.id).then(function(result) {
//       var x = {
//     name:result.bookName,
//     author:result.author
// };
//   //  res.send(result.bookName);
// console.log(x);
// res.json(x);
// //res.sendFile(path.join(__dirname + '/../views'+'/InventoryBookAddedConfirmPage.html'),x);
//   });
// }
//
// exports.updateBookRecords = (req, res) => {
//   bookrecords.update({
//     bookName: req.body.name,
//     author:req.body.author
//   },
// {
//   where:
//   {
//     bookID : req.params.id
//   }
// }).then(function() {
//   res.sendStatus(200);
// })
// };
//
// //module.exports=Book;
