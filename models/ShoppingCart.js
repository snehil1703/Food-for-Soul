//Author: Siddartha RAo chennur
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var Sequelize = require('sequelize');
var sequelize = new Sequelize('foodforsoul1', 'root', 'root',{
  define: {
   timestamps: false // true by default
 }
});

var cartrecords = sequelize.define('cart_details', {
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
    }
});

var products = sequelize.define('product_tabs', {
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
      field: 'isbn',
      primaryKey: true
    },
    price:{
      type: Sequelize.INTEGER,
      field: 'price'
    }
});

//this method fetches cart details from cart table to display in shopping cart
exports.findBookRecords = (req, res) => {
    cartrecords.findById(req.session.bookId).then(function(result) {
      var x = {
    name:result.bookName,
    author:result.author,
  description:result.description,
  quantity:result.quantity,
  category:result.category,
  isbn:result.isbn,
  price:result.price,
  discountApplicable:result.discountApplicable,
  discountRate:result.discountRate,
  couponCode:result.couponCode
};

res.json(x);
  });
}


//this method on button click addtocart insert item into cart
exports.toCart = (req,res) => {
  products.findOne({
    where:{
      isbn:'1234'
    }
  }).then(function(result) {
    cartrecords.findOne({
      where: {
        buyerID : req.session.emailID,
        isbn:'1234'
      }
    }).then(function (result2){
    		if(!result2) {
    cartrecords.create({
      bookId: result.bookId,
      bookName:result.bookName,
      isbn: '1234', // use it from sessionID
    price: result.price,
      quantity: req.body.productQuantity,
      buyerID:req.session.emailID//use it from session
    });
  }
  else{
    var quan=0;
    quan = result2.quantity + parseInt(req.body.productQuantity)
    cartrecords.update({
      quantity:quan
    },
  {
    where:
    {
      buyerID : req.session.emailID,
      isbn : '1234'//use session
    }
  })

  }
});


});
};
//this method on button click delete ; delete item in table


//Deleting a book record
exports.deleteIteminCart = (req, res) => {
//var check =   JSON.parse(req.body);
console.log('deleted');
cartrecords.destroy({
  where: {
  isbn : req.session.isbn
  }
}).then(function(result) {
res.send('deleted');
});

 };

//this method fetches cart details from cart table to display in shopping cart
exports.findAllCartRecords = (req, res) => {
//var check =   JSON.parse(req.body);
cartrecords.findAll({
  where: {
  buyerID : req.session.emailID// use it from session
  }
}).then(function(result) {

  var x  = result;
  console.log(result.length);
   res.json(x);
});
 };

//this method updates cart table on click of checkout button in shopping cart
 exports.updateCartTable = (req, res) => {
  cartrecords.update({
    total: req.body.totalsum,
    subtotal: req.body.total,
    quantity:req.body.quantity
  },
{
  where:
  {
    buyerID : req.session.emailID,
    isbn : req.body.isbn
  }
}).then(function() {
 res.send('cartUpdated');
})
};
