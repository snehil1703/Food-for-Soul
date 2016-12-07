//Author - Prasandeep Singh
//Model file to interact with admin_records table in the database using Sequelize


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
    timestamps: false
  }
});


//To define metadata fields for admin_records table
var adminRecords = sequelize.define('admin_records',
{
   adminId:
   {
      type: Sequelize.INTEGER,
      field: 'adminID',
      primaryKey: true,
      autoIncrement: true
    },
   adminFirstName:
   {
      type: Sequelize.STRING,
      field: 'adminFirstName'
    },
    adminLastName:
    {
      type: Sequelize.STRING,
      field: 'adminLastName'
    },
    adminEmail:
    {
      type: Sequelize.STRING,
      field: 'adminEmail',
    },
    adminPhoneNumber:
    {
      type: Sequelize.STRING,
      field: 'adminPhoneNumber',
    },
    adminAddress1:
    {
      type: Sequelize.STRING,
      field: 'adminAddress1',
    }
});


//Adds new Admin details to
//Pre-conditions   --> Takes input request from the addAdmin function of AdminDashboard Controller
//Post-conditions  --> Inserts admin details into the database and returns the response to success function of AddAdmin.html page
exports.insertNewAdmin = (req, res) =>
{
  sequelize.sync().then(function()
  {
    return adminRecords.create
    ({
        adminFirstName: req.body.adminFirstName,
        adminLastName: req.body.adminLastName,
        adminEmail:req.body.adminEmail
    });
  }).then(function ()
  {
        res.sendStatus(200);
  });
};


//Fetches a list of all admins from database
//Pre-conditions   --> Takes input request from the getAllAdmins function of AdminDashboard Controller
//Post-conditions  --> Fetches admin details from the database and returns the response to success function of AddRemoveAdmin.html page
exports.findAllAdminRecords = (req, res) =>
{
  adminRecords.findAll().then(function(result)
  {
        res.json(result);
  });
};


//Delete the selected admin from database
//Pre-conditions   --> Takes input request from the deleteAdminForAdminId function of AdminDashboard Controller
//Post-conditions  --> Deletes admin details from the database and returns the response to success function of AddRemoveAdmin.html page
exports.deleteAdminForAdminId = (req, res) =>
{
  adminRecords.destroy
  ({
      where:
      {
          adminId : req.session.adminId
        }
  }).then(function(result)
  {
      res.sendStatus(200);
  });
};


//Fetches a particular Admin details from database
//Pre-conditions   --> Takes input request from the getAdminProfile function of AdminDashboard Controller
//Post-conditions  --> Fetches information of a particular admin from the database and returns the response to success function of adminProfile.html page
exports.findAdminRecord = (req, res) =>
{
   adminRecords.findById(1).then(function(result)
   {
         var x =
         {
           adminFirstName:result.adminFirstName,
           adminLastName:result.adminLastName,
           adminEmail:result.adminEmail,
           adminPhoneNumber:result.adminPhoneNumber,
           adminAddress1:result.adminAddress1
         };
         res.json(x);
   });
 };


 //Changes and updates admin profile information of a particular Admin to the database
 //Pre-conditions   --> Takes input request from the updateAdmin function of AdminDashboard Controller
 //Post-conditions  --> Updates information of a particular admin to the database and returns the response to success function of adminProfile.html page
 exports.updateAdminRecords = (req, res) =>
 {
   adminRecords.update
   ({
      adminFirstName: req.body.adminFirstName,
      adminLastName: req.body.adminLastName,
      adminEmail:req.body.adminEmail,
      adminPhoneNumber:req.body.adminPhoneNumber,
      adminAddress1:req.body.adminAddress1
    },
    {
      where:
      {
        adminID : '1'
      }
    })
    .then(function()
    {
        res.sendFile(path.join(__dirname + '/../views'+'/PersonalInformation.html'));
    })
 };
