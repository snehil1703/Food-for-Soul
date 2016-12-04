//Author Prasandeep Singh--- Controller for Buyer Dashboard Activities
var express = require('express');
var app = express();
var path = require('path');


// Declaring instances of models
var paymentCard  = require('../models/PaymentCard.js');
var buyer  = require('../models/Buyer.js');
var buyerOrders  = require('../models/Orders.js');
var buyerReviews  = require('../models/Reviews.js');


// To Route user to CancelOrderFormPage.html Page
//Pre-conditions   --> Takes input request from the cancelOrder function of app1.js
//Post-conditions  --> Routes the user to CancelOrderFormPage.html Page
exports.cancelOrder = (req, res) =>
{
  res.sendFile(path.join(__dirname + '/../views'+'/CancelOrderFormPage.html'));
};


// To Route user to ReturnOrderFormPage.html Page
//Pre-conditions   --> Takes input request from the returnReplace function of app1.js
//Post-conditions  --> Routes the user to ReturnOrderFormPage.html Page
exports.returnReplace = (req, res) =>
{
  res.sendFile(path.join(__dirname + '/../views'+'/ReturnOrderFormPage.html'));
};


// To Route user to AddCard.html Page
//Pre-conditions   --> Takes input request from the addCard function of app1.js
//Post-conditions  --> Routes the user to AddCard.html Page
exports.addCard = (req, res) =>
{
  res.sendFile(path.join(__dirname + '/../views'+'/AddCard.html'));
};


// To Route user to insertNewCard function in the PaymentCard model file
//Pre-conditions   --> Takes input request from the addNewCard function of app1.js
//Post-conditions  --> Routes the user to insertNewCard of PaymentCard model file
exports.addNewCard = (req, res) =>
{
      paymentCard.insertNewCard(req, res);
}


// To Route user to EditCard.html Page
//Pre-conditions   --> Takes input request from the editCard function of app1.js
//Post-conditions  --> Routes the user to EditCard.html Page
exports.editCard = (req, res) =>
{
  res.sendFile(path.join(__dirname + '/../views'+'/EditCard.html'));
};



// To Route user to findCardRecords function in the PaymentCard model file
//Pre-conditions   --> Takes input request from the getCard function of app1.js
//Post-conditions  --> Routes the user to findCardRecords of PaymentCard model file
exports.getCard = (req, res) =>
{
  paymentCard.findCardRecords(req, res);
}


// To Route user to findTopRated function in the Reviews model file and to sendEmail function in Buyer model class
//Pre-conditions   --> Takes input request from the getTopRated function of app1.js
//Post-conditions  --> Routes the user to findTopRated function in the Reviews model file and to sendEmail function in Buyer model class
exports.getTopRated = (req, res) =>
{
  req.session.mailText= req.body.mailText;
  buyerReviews.findTopRated(req, res);
  buyer.sendEmail(req,res);
}


// To Route user to MyOrders.html Page
//Pre-conditions   --> Takes input request from the myOrders function of app1.js
//Post-conditions  --> Routes the user to MyOrders.html Page
exports.myOrders = (req, res) =>
{
  res.sendFile(path.join(__dirname + '/../views'+'/MyOrders.html'));
};


// To Route user to MySavedCards.html Page
//Pre-conditions   --> Takes input request from the mySavedCards function of app1.js
//Post-conditions  --> Routes the user to MySavedCards.html Page
exports.mySavedCards = (req, res) =>
{
  res.sendFile(path.join(__dirname + '/../views'+'/MySavedCards.html'));
};


// To Route user to ReviewRating.html Page
//Pre-conditions   --> Takes input request from the reviewRating function of app1.js
//Post-conditions  --> Routes the user to ReviewRating.html Page
exports.reviewRating = (req, res) =>
{
  res.sendFile(path.join(__dirname + '/../views'+'/ReviewRating.html'));
};


// To Route user to PersonalInformation.html Page
//Pre-conditions   --> Takes input request from the personalInformation function of app1.js
//Post-conditions  --> Routes the user to PersonalInformation.html Page
exports.personalInformation = (req, res) =>
{
  res.sendFile(path.join(__dirname + '/../views'+'/PersonalInformation.html'));
};


// To Route user to findBuyerRecord function in the Buyer model file
//Pre-conditions   --> Takes input request from the getbuyerProfile function of app1.js
//Post-conditions  --> Routes the user to findBuyerRecord of Buyer model file
exports.getbuyerProfile = (req, res) =>
{
  buyer.findBuyerRecord(req, res);
}


// To Route user to updateBuyerRecords function in the Buyer model file
//Pre-conditions   --> Takes input request from the updateBuyer function of app1.js
//Post-conditions  --> Routes the user to updateBuyerRecords of Buyer model file
exports.updateBuyer = (req, res) =>
{
  buyer.updateBuyerRecords(req, res);
}


// To Route user to findAllOrderRecords function in the Orders model file
//Pre-conditions   --> Takes input request from the getAllOrders function of app1.js
//Post-conditions  --> Routes the user to findAllOrderRecords of Orders model file
exports.getAllOrders = (req, res) =>
{
  buyerOrders.findAllOrderRecords(req, res);
}


// To Route user to findAllReviewRecords function in the Reviews model file
//Pre-conditions   --> Takes input request from the getAllReviews function of app1.js
//Post-conditions  --> Routes the user to findAllReviewRecords of Reviews model file
exports.getAllReviews = (req, res) =>
{
  buyerReviews.findAllReviewRecords(req, res);
}


// To Route user to findAllCardRecords function in the PaymentCard model file
//Pre-conditions   --> Takes input request from the getAllCards function of app1.js
//Post-conditions  --> Routes the user to findAllCardRecords of PaymentCard model file
exports.getAllCards = (req, res) =>
{
  paymentCard.findAllCardRecords(req, res);
}


// To Route user to insertNewCard function in the PaymentCard model file
//Pre-conditions   --> Takes input request from the newCard function of app1.js
//Post-conditions  --> Routes the user to insertNewCard of PaymentCard model file
 exports.newCard = (req, res) =>
 {
   paymentCard.insertNewCard(req, res);
 }


 // To Route user to updateCardRecords function in the PaymentCard model file
 //Pre-conditions   --> Takes input request from the updateCard function of app1.js
 //Post-conditions  --> Routes the user to updateCardRecords of PaymentCard model file
 exports.updateCard = (req, res) =>
 {
   paymentCard.updateCardRecords(req, res);
 }


 // To Route user to deleteCardForCardId function in the PaymentCard model file and to store cardId as a session
 //Pre-conditions   --> Takes input request from the deleteCardForCardId function of app1.js
 //Post-conditions  --> Routes the user to deleteCardForCardId of PaymentCard model file and stores cardId as a session
 exports.deleteCardForCardId = (req, res) =>
 {
  req.session.cardId= req.body.cardId;
  paymentCard.deleteCardForCardId(req, res) ;
};


// To store buyerId as a session
//Pre-conditions   --> Takes input request from the setBuyerIdSession function of app1.js
//Post-conditions  --> Stores buyerId as a session
exports.setBuyerIdSession = (req, res) =>
 {
   req.session.buyerId= req.body.buyerId;
   res.sendStatus(200);
 };


 // To store cardId as a session
 //Pre-conditions   --> Takes input request from the setCardIdSession function of app1.js
 //Post-conditions  --> Stores cardId as a session
exports.setCardIdSession = (req, res) =>
 {
    req.session.cardId= req.body.cardId;
    res.sendStatus(200);
 };


 // To store orderId as a session
 //Pre-conditions   --> Takes input request from the setOrderIdSession function of app1.js
 //Post-conditions  --> Stores orderId as a session
exports.setOrderIdSession = (req, res) =>
{    req.session.emailID='nikithauc@gmail.com'
    req.session.orderId= req.body.orderId;
    res.sendStatus(200);
};
