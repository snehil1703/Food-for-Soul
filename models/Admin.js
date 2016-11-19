var express = require('express');
var app = express();
var path = require('path');

var Sequelize = require('sequelize');
var sequelize = new Sequelize('foodforsoul', 'root', 'root',{
  define: {
   timestamps: false // true by default
 }
});

var adminRecords = sequelize.define('admin_records', {
   adminId: {
      type: Sequelize.INTEGER,
      field: 'adminID',
      primaryKey: true,
      autoIncrement: true
    },
  adminFirstName: {
      type: Sequelize.STRING,
      field: 'adminFirstName'
    },
    adminLastName:{
      type: Sequelize.STRING,
      field: 'adminLastName'
    },
    adminEmail:{
      type: Sequelize.STRING,
      field: 'adminEmail'
    }
});



exports.insertNewAdmin = (req, res) => {
  console.log(''+req.body.adminFirstName);
  console.log(''+req.body.adminLastName);
  console.log(''+req.body.adminEmail);
  sequelize.sync().then(function() {
    return adminRecords.create({
      adminFirstName: req.body.adminFirstName,
      adminLastName: req.body.adminLastName,
      adminEmail:req.body.adminEmail
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
