var express = require('express');
var app = express();
var path = require('path');
var Review  = require('../models/BuyerReview.js');

exports.submitReview = (req, res) => {
  if(!req.session.emailID){
     res.send('notloggedin');
  } else{
    res.send('loggedin');
    Review.insertNewReview(req, res);
  }

      //send session ids for product and user
}



exports.getReview = (req, res) => {``
  Review.findReview(req, res);
}
