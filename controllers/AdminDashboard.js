var express = require('express');
var app = express();
var path = require('path');
var Admin  = require('../models/Admin.js');
var buyer  = require('../models/Buyer.js');

exports.siteAnalyticsReport = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/SiteAnalyticsReport.html'));

    console.log('Site Analytics Report Page');

};
exports.addRemoveAdmin = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/AddRemoveAdmin.html'));

    console.log('Add Remove Admin Page');

};

//fetch all admins from database
exports.getAllAdmins = (req, res) => {
  Admin.findAllAdminRecords(req, res);
}

//Delete selected admin from the database
exports.deleteAdminForAdminId = (req, res) => {
  req.session.adminId= req.body.adminId;
 Admin.deleteAdminForAdminId(req, res) ;
    //console.log('this is in3 controllers');
};

exports.addAdmin = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/AddAdmin.html'));

    console.log('Add Admin Page');

};

exports.newAdmin = (req, res) => {
      Admin.insertNewAdmin(req, res);
}

exports.adminProfile = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/AdminProfile.html'));

    console.log('Admin Profile Page');

};
exports.newsletter = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/Newsletter.html'));

    console.log('Newsletter Page');

};

//To send mail
exports.sendEmailToUsers = (req, res) => {
  req.session.mailText= req.body.mailText;
  buyer.sendEmail(req, res);
}

//fetch admin profile from database
exports.getAdminProfile = (req, res) => {
  Admin.findAdminRecord(req, res);
}

//Update admin profile
exports.updateAdmin = (req, res) => {
  Admin.updateAdminRecords(req, res);
}
