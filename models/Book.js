//This Model interfaces with the table book_records in the foodforsouldatabase
//maintaining the records of books and allowing user to add, modify , fetch book records
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initializing the ORM to connect to the database
var Sequelize = require('sequelize');
var sequelize = new Sequelize('foodforsoul1', 'root', 'root',{
  define: {
   timestamps: true
 }
});

//creating object of book_records which will be used to map to database

var bookrecords = sequelize.define('book_records', {
  bookId: {
      type: Sequelize.INTEGER,
      field: 'bookID',
      primaryKey: true
    },
  bookName: {
      type: Sequelize.STRING,
      field: 'bookName'
    },
    author:{
      type: Sequelize.STRING,
      field: 'author'
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
    description:{
      type: Sequelize.STRING,
      field: 'description'
    },
    discountApplicable:{
      type: Sequelize.STRING,
      field: 'discountApplicable'
    },
    discountRate:{
      type: Sequelize.INTEGER,
      field: 'discountRate'
    },
    couponCode:{
      type: Sequelize.STRING,
      field: 'couponCode'
    },
    sellerID:{
      type: Sequelize.STRING,
      field: 'sellerID'
    },
    category:{
      type: Sequelize.STRING,
      field: 'category'
    },

  category1:{
    type: Sequelize.STRING,
    field: 'category1'
  },
  category2:{
    type: Sequelize.STRING,
    field: 'category2'
  },
  condition:{
    type: Sequelize.STRING,
    field: 'condition'
  },
  format:{
    type: Sequelize.STRING,
    field: 'format'
  },
  language:{
    type: Sequelize.STRING,
    field: 'language'
  },
  bookSoldCount:{
    type: Sequelize.INTEGER,
    field: 'language'
  },
  source:{
    type: Sequelize.STRING,
    field: 'source'
  },
  rating:{
    type: Sequelize.INTEGER,
    field: 'rating'
  }
});


//Added by Nikitha for Inventory Management to add new book records
exports.addBookRecords = (req, res) => {

    category1:{
        type: Sequelize.STRING,
        field: 'category1'
    },
    category2:{
        type: Sequelize.STRING,
        field: 'category2'
    },
    format:{
        type: Sequelize.STRING,
        field: 'format'
    },
    condition:{
        type: Sequelize.STRING,
        field: 'condition'
    },
    createdAt:{
        type: Sequelize.STRING,
        field: 'createdAt'
    }
});

exports.books_data = (req, res) => {
    bookrecords.findAll({
        orderBy: [['createdAt', 'DESC']]
    }).then(function(result) {
        res.json(result);
    });
}

  sequelize.sync().then(function() {
    return bookrecords.create({

      bookName: req.session.imBookName,
      author: req.session.imAuthor,
      description:req.session.imDescription,
      quantity:req.session.imQuantity,
      isbn:req.session.imisbn,
      price:req.session.imPrice,
      category:req.session.imCategory,
      discountApplicable:req.session.imDiscountApplicable,
      discountRate:req.session.imDiscountRate,
      couponCode:req.session.imCouponCode,
      category1:req.session.imCategory1,
      category2:req.session.imCategory2,
      language:req.session.imLanguage,
      condition:req.session.imCondition,
      format:req.session.imFormat,
      sellerID:req.session.sellerID,
      source:req.session.imSource

    });
  }).then(function () {
    //sending success page on successful insertion of new book details
    res.sendFile(path.join(__dirname + '/../views'+'/InventoryBookAddedConfirmPage.html'));

  });


};

//Added by Nikitha for Inventory Management to fetch books on user selecting a bookId
exports.findBookRecords = (req, res) => {

  bookrecords.findById(req.session.bookId).then(function(result) {
    // following parses the result fetches and sends the data in json format
    var bookDetails = {
      name:result.bookName,
      author:result.author,
      description:result.description,
      quantity:result.quantity,
      category:result.category,
      isbn:result.isbn,
      price:result.price,
      discountApplicable:result.discountApplicable,
      discountRate:result.discountRate,
      couponCode:result.couponCode,
      category1:result.category1,
      condition:result.condition,
      category2:result.category2,
      language:result.language,
      format:result.format

    };

    res.json(bookDetails);

  });
}

// Added By Nikitha to update a book record which is modified by the user
exports.modifyBookRecords = (req, res) => {

// updates the book records with new details entered by the user.
  bookrecords.update({
    bookName: req.body.name,
    author: req.body.author,
    description:req.body.description,
    category:req.body.category,
    quantity:req.body.quantity,
    isbn:req.body.isbn,
    price:req.body.price,
    discountApplicable:req.body.discountApplicable,
    discountRate:req.body.discountRate,
    couponCode:req.body.couponCode,
    category1:req.body.category1,
    category2:req.body.category2,
    language:req.body.language,
    condition:req.body.condition,
    format:req.body.format
  },
  {
    where:
    {
      bookID : req.session.bookId
    }
  }).then(function() {
    // sends success page to the user
    res.sendFile(path.join(__dirname + '/../views'+'/InventoryBookModifiedConfirmPage.html'));
  })
};

// Added By Nikitha to find all book record for a given sellerID
exports.findAllBookRecords = (req, res) => {
  //var check =   JSON.parse(req.body);
  bookrecords.findAll({
    where: {

      sellerID :   req.session.sellerID
    }
  }).then(function(result) {
// sends the result containing the database records in json format
    //var x  = result;
    console.log('sfaffa'+result.length);
    res.json(result);
  });

 };


//Added By Nikitha for Deleting a book record
exports.deleteBookRecords= (req, res) => {
  //var check =   JSON.parse(req.body);
  bookrecords.destroy({
    where: {
          bookId : req.session.bookId
    }
  }).then(function(result) {
// sends success status
    res.sendStatus(200);
  });

  };

  exports.findNewProducts = (req, res) => {
  bookrecords.findAll(
    {
      where:
      {
        createdAt:
         {
           $gt: new Date(new Date() - 24 * 60 * 60 * 1000)
         }
      }
    })
    .then(function(result)
    {
      var x  =result;
      res.json(x);
    });
  };

  exports.findNewOffers = (req, res) => {
  bookrecords.findAll(
    {
      where:
      {
        discountRate:
         {
           $gte: 30
         }
      }
    })
    .then(function(result)
    {
      var x  =result;
      res.json(x);
    });
  };

//module.exports=Book;
