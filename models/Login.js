

var express = require('express');
var app = express();
var path = require('path');

var Sequelize = require('sequelize');
var sequelize = new Sequelize('mysql://b7f2b0155047a9:7b23ad76@us-cdbr-iron-east-04.cleardb.net/heroku_636e68d7f13c57e',{
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
