var express = require('express');
var app = express();
var path = require('path');




exports.confirmAddBooks = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/InventoryBookAddedConfirmPage.html'));

    console.log('this is in 1controllers');

};


exports.confirmModifyBooks = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/InventoryBookModifiedConfirmPage.html'));

    console.log('this is in 2controllers');

};


exports.confirmAddNotes = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/InventoryClassNotesAddedConfirmPage.html'));

    console.log('this is in3 controllers');

};


exports.confirmModifyNotes = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/InventoryClassNotesModifiedPage.html'));

    console.log('this is in 4 controllers');

};
