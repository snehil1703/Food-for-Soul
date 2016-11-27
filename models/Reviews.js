var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var Sequelize = require('sequelize');
var sequelize = new Sequelize('foodforsoul', 'root', 'root',{
  define: {
   timestamps: false // true by default
 }
});

var reviewrecords = sequelize.define('review_records', {
  reviewId:
   {
      type: Sequelize.INTEGER,
      field: 'reviewID',
      primaryKey: true
    },

  bookId:
  {
      type: Sequelize.INTEGER,
      field: 'bookID',
      primaryKey: true
  },
  notesId:
  {
      type: Sequelize.INTEGER,
      field: 'reviewID',
      primaryKey: true
  },

  bookName:
  {
      type: Sequelize.STRING,
      field: 'bookName'
  },
  notesName:
  {
      type: Sequelize.STRING,
      field: 'notesName'
  },
  rating:
  {
      type: Sequelize.INTEGER,
      field: 'rating'
  },
  review:
  {
      type: Sequelize.STRING,
      field: 'review'
  },
  buyerId:
  {
        type: Sequelize.INTEGER,
        field: 'buyerID',
  }

});



exports.findAllReviewRecords = (req, res) => {
reviewrecords.findAll(
  {
    where:
    {
        buyerID : '1'
    }
  })
  .then(function(result)
  {
    var x  = result;
    res.json(x);
  });
};
