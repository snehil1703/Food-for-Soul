var express = require('express');
var app = express();
var path = require('path');


exports.siteAnalyticsReport = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/SiteAnalyticsReport.html'));

    console.log('Site Analytics Report Page');

};
