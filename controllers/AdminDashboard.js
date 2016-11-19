var express = require('express');
var app = express();
var path = require('path');
var Admin  = require('../models/Admin.js');

exports.siteAnalyticsReport = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/SiteAnalyticsReport.html'));

    console.log('Site Analytics Report Page');

};
exports.addRemoveAdmin = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/AddRemoveAdmin.html'));

    console.log('Add Remove Admin Page');

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
