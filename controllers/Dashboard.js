var express = require('express');
var app = express();
var path = require('path');
var paymentCard  = require('../models/PaymentCard.js');


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
