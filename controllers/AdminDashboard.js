//Author Prasandeep Singh--- Controller for Admin Dashboard Activities
var app = express();
var path = require('path');


// Declaring instances of models
var Admin  = require('../models/Admin.js');
var buyer  = require('../models/Buyer.js');


// To display all the site analytics
//Pre-conditions   --> Takes input request from the siteAnalyticsReport function of app1.js
//Post-conditions  --> Routes the user to SiteAnalyticsReport.html Page
exports.siteAnalyticsReport = (req, res) =>
{
  res.sendFile(path.join(__dirname + '/../views'+'/SiteAnalyticsReport.html'));
};


// To Route user to AddRemoveAdmin.html Page
//Pre-conditions   --> Takes input request from the AddRemoveAdmin function of app1.js
//Post-conditions  --> Routes the user to AddRemoveAdmin.html Page
exports.addRemoveAdmin = (req, res) =>
{
  res.sendFile(path.join(__dirname + '/../views'+'/AddRemoveAdmin.html'));
};


// To Route user to findAllAdminRecords function in the Admin model file
//Pre-conditions   --> Takes input request from the getAllAdmins function of app1.js
//Post-conditions  --> Routes the user to findAllAdminRecords of Admin model file
exports.getAllAdmins = (req, res) =>
{
  Admin.findAllAdminRecords(req, res);
}


// To Route user to deleteAdminForAdminId function in the Admin model file and store adminId in the session
//Pre-conditions   --> Takes input request from the deleteAdminForAdminId function of app1.js
//Post-conditions  --> Routes the user to deleteAdminForAdminId of Admin model file and stores adminId in the session
exports.deleteAdminForAdminId = (req, res) =>
{
  req.session.adminId= req.body.adminId;
  Admin.deleteAdminForAdminId(req, res) ;
};


// To Route user to AddAdmin.html Page
//Pre-conditions   --> Takes input request from the addAdmin function of app1.js
//Post-conditions  --> Routes the user to AddAdmin.html
exports.addAdmin = (req, res) =>
{
  res.sendFile(path.join(__dirname + '/../views'+'/AddAdmin.html'));
};


// To Route user to insertNewAdmin function of Admin model file
//Pre-conditions   --> Takes input request from the newAdmin function of app1.js
//Post-conditions  --> Routes the user to nsertNewAdmin function of Admin model file
exports.newAdmin = (req, res) =>
{
      Admin.insertNewAdmin(req, res);
}


// To Route user to AdminProfile.html Page
//Pre-conditions   --> Takes input request from the adminProfile function of app1.js
//Post-conditions  --> Routes the user to AdminProfile.html
exports.adminProfile = (req, res) =>
{
  res.sendFile(path.join(__dirname + '/../views'+'/AdminProfile.html'));
};


// To Route user to Newsletter.html Page
//Pre-conditions   --> Takes input request from the newsletter function of app1.js
//Post-conditions  --> Routes the user to Newsletter.html
exports.newsletter = (req, res) =>
{
  res.sendFile(path.join(__dirname + '/../views'+'/Newsletter.html'));
};


// To Route user to sendEmail function in the buyer model file and store mailText in the session
//Pre-conditions   --> Takes input request from the sendEmailToUsers function of app1.js
//Post-conditions  --> Routes the user to sendEmail function in the buyer model file and store mailText in the session
exports.sendEmailToUsers = (req, res) =>
{
  req.session.mailText= req.body.mailText;
  buyer.sendEmail(req, res);
}


// To Route user to findAdminRecord function of Admin model file
//Pre-conditions   --> Takes input request from the getAdminProfile function of app1.js
//Post-conditions  --> Routes the user to findAdminRecord function of Admin model file
exports.getAdminProfile = (req, res) =>
{
  Admin.findAdminRecord(req, res);
}


// To Route user to updateAdminRecords function of Admin model file
//Pre-conditions   --> Takes input request from the updateAdmin function of app1.js
//Post-conditions  --> Routes the user to updateAdminRecords function of Admin model file
exports.updateAdmin = (req, res) =>
{
  Admin.updateAdminRecords(req, res);
}
