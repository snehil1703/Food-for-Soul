// Author: Siddartha Rao Chennur
var express = require('express');
var app = express();
var path = require('path');

var Sequelize = require('sequelize');
var sequelize = new Sequelize('foodforsoul1', 'root', 'root',{
  define: {
   timestamps: false // true by default
 }
});


var nodemailer = require('nodemailer');

var router = express.Router();

// this method sends mail to the customer once order is placed successfully
exports.confirmPayment = (req, res) => {
    // Not the movie transporter!
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'foodforsoul1.16@gmail.com', // Your email id
            pass: 'ffs_nprss' // Your password
        }
    });

    var text = 'Hello ,Thank you for placing your order with FoodForSoul.\n Your order will be shipped in next 24 hours.';

      var mailOptions = {
        from: 'foodforsoul.16@gmail.com',
        to:  req.session.emailID,
        subject: 'Welcome to FoodForSoul',
        text: text
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
          //  res.json({yo: 'error'});
        }else{
            console.log('Message sent: ' + info.response);
            //res.json({yo: info.response});
        };
    });


  }
