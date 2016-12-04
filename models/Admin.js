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
      field: 'adminEmail',
    },
    adminPhoneNumber:{
      type: Sequelize.STRING,
      field: 'adminPhoneNumber',
    },
    adminAddress1:{
      type: Sequelize.STRING,
      field: 'adminAddress1',
    }
});


//Adds new Admin details to database
exports.insertNewAdmin = (req, res) => {
  console.log(''+req.body.adminFirstName);
  console.log(''+req.body.adminLastName);
  console.log(''+req.body.adminEmail);
  sequelize.sync({
  //  force:true
  }).then(function() {
    return adminRecords.create({
      adminFirstName: req.body.adminFirstName,
      adminLastName: req.body.adminLastName,
      adminEmail:req.body.adminEmail
    });
  }).then(function () {
    res.sendStatus(200);
    console.log('Admin Added');
    //res.status(200);
//  res.sendFile(path.join(__dirname + '/../views'+'/AddRemoveAdmin.html'));
  });
};

//Fetches a list of all admins from database
exports.findAllAdminRecords = (req, res) => {
  adminRecords.findAll().then(function(result) {
        res.json(result);
  });
};

//Delete the selected admin from database
//Deleting a book record
exports.deleteAdminForAdminId = (req, res) => {
//var check =   JSON.parse(req.body);
adminRecords.destroy({
  where: {
  //  author:req.params.author
  adminId : req.session.adminId
  }
}).then(function(result) {

res.sendStatus(200);
});

 };


 //Fetches Admin details from database
 exports.findAdminRecord = (req, res) => {
   adminRecords.findById(2).then(function(result) {

         var x =
         {
           adminFirstName:result.adminFirstName,
           adminLastName:result.adminLastName,
           adminEmail:result.adminEmail,
           adminPhoneNumber:result.adminPhoneNumber,
           adminAddress1:result.adminAddress1
         };

         //This is working
         console.log(result.adminFirstName);
         res.json(x);
   });
 };



 exports.updateAdminRecords = (req, res) => {

   adminRecords.update(
   {
     adminFirstName: req.body.adminFirstName,
     adminLastName: req.body.adminLastName,
     adminEmail:req.body.adminEmail,
     adminPhoneNumber:req.body.adminPhoneNumber,
     adminAddress1:req.body.adminAddress1
   },
   {
     where:
     {
       adminId : '2'
     }
   })
   .then(function()
    {
      res.sendFile(path.join(__dirname + '/../views'+'/PersonalInformation.html'));
    })
 };
