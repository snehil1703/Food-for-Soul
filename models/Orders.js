//Author - Prasandeep Singh and Siddartha Rao
//Model file to interact with orders_records table in the database using Sequelize

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//Creating an object of nodemailer to send auto-generated emails to users
var nodemailer = require('nodemailer');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var Sequelize = require('sequelize');
var sequelize = new Sequelize('foodforsoul', 'root', 'root',
{
  //To disable the auto-created columns- createdAt and updatedAt to be populated in the table
  define:
  {
      timestamps: false // true by default
  }
});


//To define metadata fields for orders_records table
var orderrecords = sequelize.define('order_details',
{
  ID:
   {
      type: Sequelize.INTEGER,
      field: 'ID',
      primaryKey: true
    },

// should be email id .lessConfusion
  buyerID:
  {
        type: Sequelize.STRING,
        field: 'buyerID',
  },

  deliveryDate:
  {
      type: Sequelize.STRING,
      field: 'deliveryDate'
  },
  orderStatus:
  {
      type: Sequelize.STRING,
      field: 'orderStatus'
  },
  price:
  {
      type: Sequelize.INTEGER,
      field: 'price'
  }
});


//Fetches a list of all orders placed by a particular buyer from database
//Pre-conditions   --> Takes input request from the getAllOrders function of Buyer Dashboard Controller
//Post-conditions  --> Fetches order details from the database and returns the response to success function of MyOrders.html page
exports.findAllOrderRecords = (req, res) =>
{
  orderrecords.findAll
  (
    {
      where:
      {
          buyerID : req.session.emailID
      }
  })

  .then(function(result)
  {
      var x  = result;
      res.json(x);
  });
};


//Added by Nikitha function called when buyer returns order to change  status of order
    exports.updateOrderStatusOnReturn = (req, res) => {
      orderrecords.update({
          orderStatus: 'Returned'
      },
    {
      where:
      {
        orderId : req.session.orderId
      }
    }).then(function() {

  // send mail to the user on successful transaction
      var transporter = nodemailer.createTransport({
          service: 'Gmail',
          auth: {
              user: 'foodforsoul.16@gmail.com', // Your email id
              pass: 'ffs_nprss' // Your password
          }
      });
      var message = 'Dear Customer, your order return is being processed. The order will be picked from your address!' ;


        var mailOptions = {
          from: 'order@foodforsoul.com', // sender address
          to: req.session.emailID, // list of receivers
          subject: 'FoodForSoul order return registered', // Subject line
          text: message
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
// send success page to user confirming return
    // res.sendFile(path.join(__dirname + '/../views'+'/ReturnOrderConfirmPage.html'));
        res.sendStatus(200);
    })
  };// end of updateOrderStatusOnReturn


//Added by Nikitha function called when buyer cancel order to change  status of order
    exports.updateOrderStatusOnCancel = (req, res) => {
        orderrecords.update({
          orderStatus: 'Cancelled'
        },
      {
        where:
        {
        orderId : req.session.orderId
        }
      }).then(function() {
  // send mail to the user on successful transaction
      var transporter = nodemailer.createTransport({
          service: 'Gmail',
          auth: {
              user: 'foodforsoul.16@gmail.com', // Your email id
              pass: 'ffs_nprss' // Your password
          }
      });
      var message = 'Dear Customer, your order has been cancelled. The amount will be refunded to your account. Thank you !' ;


        var mailOptions = {
          from: 'order@foodforsoul.com', // sender address
          to:  req.session.emailID, // list of receivers
          subject: 'foodforsoul Order Cancelled Confirmation!!', // Subject line
          text: message
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
      // send success page to user confirming cancellation
    //   res.sendFile(path.join(__dirname + '/../views'+'/CancelOrderConfirmPage.html'));
    res.sendStatus(200);
      })
    };// end of updateOrderStatusOnCancel


//Added by Nikitha Return And Cancel Order to fetch order on buyer selecting a orderId
      exports.findOrderDetailsById = (req, res) => {
        console.log("this is order in session"+req.session.orderId);
            orderrecords.findById( req.session.orderId).then(function(result) {
            var orderDetails = {
          price:result.price,
          orderid:result.orderId,
        deliveryStatus:result.orderStatus
      };
      res.json(orderDetails);

        });
      } // end of findOrderDetailsById
