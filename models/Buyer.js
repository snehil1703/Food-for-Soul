var express = require('express');
var app = express();
var path = require('path');

var nodemailer = require('nodemailer');
var router = express.Router();

var Sequelize = require('sequelize');
var sequelize = new Sequelize('foodforsoul', 'root', 'root',{
  define: {
   timestamps: false // true by default
 }
});

var buyerRecords = sequelize.define('buyer_records', {
   buyerId: {
      type: Sequelize.INTEGER,
      field: 'buyerId',
      primaryKey: true,
      autoIncrement: true
    },
  buyerFirstName: {
      type: Sequelize.STRING,
      field: 'buyerFirstName'
    },
    buyerLastName:{
      type: Sequelize.STRING,
      field: 'buyerLastName'
    },
    buyerEmail:{
      type: Sequelize.STRING,
      field: 'buyerEmail',
    },
    buyerAddress1:{
      type: Sequelize.STRING,
      field: 'buyerAddress1',
    },
    buyerAddress2:{
      type: Sequelize.STRING,
      field: 'buyerAddress2',
    },
    buyerCity:{
      type: Sequelize.STRING,
      field: 'buyerCity',
    },
    buyerPostcode:{
      type: Sequelize.STRING,
      field: 'buyerPostcode',
    },
    buyerPassword:{
      type: Sequelize.STRING,
      field: 'buyerPassword',
    },
    buyerPhoneNumber:{
      type: Sequelize.STRING,
      field: 'buyerPhoneNumber',
    }

});



//Fetches buyer details from database
exports.findBuyerRecord = (req, res) => {
  buyerRecords.findById(2).then(function(result) {

        var x =
        {
          buyerFirstName:result.buyerFirstName,
          buyerLastName:result.buyerLastName,
          buyerEmail:result.buyerEmail,
          buyerPhoneNumber:result.buyerPhoneNumber,
          buyerAddress1:result.buyerAddress1
        };

        //This is working
        console.log(result.buyerFirstName);
        res.json(x);
  });
};



exports.updateBuyerRecords = (req, res) => {

  buyerRecords.update(
  {
    buyerFirstName: req.body.buyerFirstName,
    buyerLastName: req.body.buyerLastName,
    buyerEmail:req.body.buyerEmail,
    buyerPhoneNumber:req.body.buyerPhoneNumber,
    buyerAddress1:req.body.buyerAddress1
  },
  {
    where:
    {
      buyerId : '2'
    }
  })
  .then(function()
   {
     res.sendFile(path.join(__dirname + '/../views'+'/PersonalInformation.html'));
   })
};


//For newsletter email push to subscribers
exports.sendEmail = (req, res) =>
{
    var emails;
    var length;
    var senders = ' ';

    buyerRecords.findAll(
    {
      attributes: ['buyerEmail']
    })
    .then(function(result)
    {
      emails = result;
      length = emails.length;

      // for(var i = 0; i<emails.length;i++)
      //   console.log(emails[i].buyerEmail);
      //   // console.log('mail content  '+document.getElementById('mailText').value);
    });

    var transporter = nodemailer.createTransport(
    {
        service: 'Gmail',
        auth:
        {
            user: 'foodforsoul.16@gmail.com', // Your email id
            pass: 'ffs_nprss' // Your password
        }
    });

  //  for(var i = 0; i<length;i++)
    console.log('From model file'+length);
    //  senders = senders + '\'' +emails[i] + ',' + '\'';


    var mailOptions =
    {
        from: 'foodforsoul.16@gmail.com', // sender address
        to:    'prasan.ubhi@gmail.com',// list of receivers
        subject: 'Hello From FoodForSoul', // Subject line
        text:  req.session.mailText//, // plaintext body
        // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead

    };

    transporter.sendMail(mailOptions, function(error, info)
    {
        if(error)
        {
            console.log(error);
          //  res.json({yo: 'error'});
        }
        else
        {
            console.log('Message sent: ' + info.response);
            //res.json({yo: info.response});
        };
    });


  }
