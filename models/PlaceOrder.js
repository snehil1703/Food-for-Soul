//Author - Siddartha Rao Chennur and Nikitha
//Model file to interact with saved_cards table in the database using Sequelize
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Creating an object of nodemailer to send auto-generated emails to users
var nodemailer = require('nodemailer');
//To disable the auto-created columns- createdAt and updatedAt to be populated in the table
var Sequelize = require('sequelize');
var sequelize = new Sequelize('mysql://us-cdbr-iron-east-04.cleardb.net:3306/heroku_636e68d7f13c57e', 'b7f2b0155047a9', '7b23ad76',{
  define: {
   timestamps: false // true by default
 }
});
//To define metadata fields for order_details table
var ordertable = sequelize.define('order_details', {
  bookId: {
      type: Sequelize.INTEGER,
      field: 'bookID'
    },
  bookName: {
      type: Sequelize.STRING,
      field: 'bookName'
    },
    isbn:{
      type: Sequelize.STRING,
      field: 'isbn'
    },
    price:{
      type: Sequelize.INTEGER,
      field: 'price'
    },
    quantity:{
      type: Sequelize.INTEGER,
      field: 'quantity'
    },
    buyerID:{
      type: Sequelize.STRING,
      field: 'buyerID'
    },
    total:{
      type: Sequelize.STRING,
      field: 'total'
    },
    subtotal:{
      type: Sequelize.STRING,
      field: 'subtotal'
    },
    orderStatus:{
      type: Sequelize.STRING,
      field: 'orderStatus'
    },
    deliveryDate:
    {
        type: Sequelize.STRING,
        field: 'deliveryDate'
    }
});


// Added by Siddartha Rao Chennur this method places order for the customer when confirm button is clicked
exports.placeMyOrder = (req, res) => {
  sequelize.sync().then(function() {
    return ordertable.create({
      bookName: req.body.bookName,
      bookID: '2',
      quantity:req.body.quantity,
      isbn:req.body.isbn,
      price:req.body.price,
      buyerID:req.session.emailID,
      total:req.body.totalsum,
    subtotal:req.body.total,
      orderStatus:'Confirmed',
      deliveryDate: '12/18/2016'
    });
  }).then(function () {
  res.send("placeyourorder");
  console.log('order Created');
    //res.status(200);
  //res.sendFile(path.join(__dirname + '/../views'+'/InventoryBookAddedConfirmPage.html'));
  });
};


//Added by Nikitha function called when buyer returns order to change  status of order
    exports.updateOrderStatusOnReturn = (req, res) => {
      ordertable.update({
        orderStatus: 'Returned'
      },
    {
      where:
      {
        ID : req.session.orderId,
        buyerID:req.session.emailID

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
        ordertable.update({
          orderStatus: 'Cancelled'
        },
      {
        where:
        {
      ID : req.session.orderId,
      buyerID:req.session.emailID

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
            ordertable.findById( req.session.orderId).then(function(result) {
            var orderDetails = {
          price:result.price,
          orderid:req.session.orderId,
        deliveryStatus:result.orderStatus
      };
      res.json(orderDetails);

        });
      } // end of findOrderDetailsById
