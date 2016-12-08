//Author Snehil Vishwakarma--- Controller for Fetching every requested Books Data or Class Notes by the user

var express = require('express');
var app = express();

// Declaring instances of models

var book = require('../models/Book.js');
var notes = require('../models/Classnote.js');

// To fetch books information requested from the user
//Pre-conditions   --> Need to be on Home Page
//Post-conditions  --> Gives the requested books information after applying user specified categories and filters

exports.booksData = (req, res) => {
    book.books_data(req, res);
}

// To fetch class notes information requested from the user
//Pre-conditions   --> Need to be on Home Page
//Post-conditions  --> Gives the requested notes information after applying user specified categories and filters

exports.notesData = (req, res) => {
    notes.notes_data(req, res);
}

// To fetch books information for PRODUCT.html
//Pre-conditions   --> Need to be on the product page
//Post-conditions  --> Gives the requested book information to product page

exports.bookInfo = (req,res) => {
    book.bookInfo (req,res);
}

// To fetch class notes information for PRODUCT.html
//Pre-conditions   --> Need to be on the product page
//Post-conditions  --> Gives the requested class notes information to product page

exports.notesInfo = (req,res) => {
    notes.notesInfo (req,res);
}
