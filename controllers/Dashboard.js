var express = require('express');
var app = express();
var path = require('path');
var paymentCard  = require('../models/PaymentCard.js');
var buyer  = require('../models/Buyer.js');
var buyerOrders  = require('../models/Orders.js');
var buyerReviews  = require('../models/Reviews.js');

exports.cancelOrder = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/CancelOrderFormPage.html'));

    console.log('Cancel Order Page');

};

exports.returnReplace = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/ReturnOrderFormPage.html'));

    console.log('Return Order Page');

};

exports.addCard = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/AddCard.html'));

    console.log('Add Card Page');

};

exports.addNewCard = (req, res) => {
      paymentCard.insertNewCard(req, res);
}


exports.editCard = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/EditCard.html'));

    console.log('Edit Card Page');

};

//To get card details
exports.getCard = (req, res) => {
  paymentCard.findCardRecords(req, res);
}


exports.myOrders = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/MyOrders.html'));

    console.log('My Orders Page');

};
exports.mySavedCards = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/MySavedCards.html'));

    console.log('My Saved Cards Page');

};
exports.reviewRating = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/ReviewRating.html'));

    console.log('Review and Ratings Page');

};
exports.personalInformation = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/PersonalInformation.html'));

    console.log('Personal Information Page');

};

//fetch buyer profile from database
exports.getbuyerProfile = (req, res) => {
  buyer.findBuyerRecord(req, res);
}

//Update buyer profile
exports.updateBuyer = (req, res) => {
  buyer.updateBuyerRecords(req, res);
}

//Fetches all the orders placed by a buyer
exports.getAllOrders = (req, res) => {
  buyerOrders.findAllOrderRecords(req, res);
}

//Fetches all the reviews placed by a buyer
exports.getAllReviews = (req, res) => {
  buyerReviews.findAllReviewRecords(req, res);
}

//Fetches all the payment cards of a buyer
exports.getAllCards = (req, res) => {
  paymentCard.findAllCardRecords(req, res);
}


//Insert new card details
 exports.newCard = (req, res) => {
       paymentCard.insertNewCard(req, res);
 }

 //Update payment Card Infor
 exports.updateCard = (req, res) => {

   paymentCard.updateCardRecords(req, res);
 }
//Deletes a particular payment card of a buyer
exports.deleteCardForCardId = (req, res) => {
  req.session.cardId= req.body.cardId;
 paymentCard.deleteCardForCardId(req, res) ;
    //console.log('this is in3 controllers');

};

exports.setBuyerIdSession = (req, res) =>
 {
   req.session.buyerId= req.body.buyerId;
   res.sendStatus(200);
 };

exports.setCardIdSession = (req, res) =>
 {
    req.session.cardId= req.body.cardId;
    res.sendStatus(200);
 };

exports.setOrderIdSession = (req, res) =>
{
    req.session.orderId= req.body.orderId;
    res.sendStatus(200);
};
