// SNEHIL

var express = require('express');
var app = express();
var book = require('../models/Book.js');
var notes = require('../models/Classnote.js');

//fetch books from database
exports.booksData = (req, res) => {
    book.books_data(req, res);
};

//fetch class notes from database
exports.notesData = (req, res) => {
    notes.notes_data(req, res);
}
