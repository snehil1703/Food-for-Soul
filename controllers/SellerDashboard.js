var express = require('express');
var app = express();
var path = require('path');





exports.manageBooks = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/ManageBooks.html'));

     console.log('Manage Books Page');
};

exports.manageNotes = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/ManageNotes.html'));

     console.log('Manage Notes Page');
};


exports.addBook = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/InventoryAddBooks.html'));

    console.log('Add Book Page');

};
exports.addNotes = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/InventoryAddClassNotesPage.html'));

    console.log('Add Notes Page');

};
exports.editBook = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/EditBook.html'));

    console.log('Edit Book Page');

};

exports.editNotes = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/EditNotes.html'));

    console.log('Edit Notes Page');

};

exports.ordersReport = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/OrdersReport.html'));

    console.log('Orders Report Page');

};

exports.booksReport = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/BooksReport.html'));

    console.log('Books Report Page');

};

exports.notesReport = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/NotesReport.html'));

    console.log('Notes Report Page');

};
