var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var Sequelize = require('sequelize');
var sequelize = new Sequelize('foodforsoul', 'root', 'mysqlroot',{
  define: {
   timestamps: false // true by default
 }
});

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
    }
});



exports.insertBookRecords = (req, res) => {
  console.log(''+req.body.name);
  console.log(''+req.body.discountEndDate);
  console.log(''+req.body.discountApplicable1);
  sequelize.sync().then(function() {
    return bookrecords.create({
      bookName: req.body.name,
      author: req.body.author,
      description:req.body.description,
      quantity:req.body.quantity,
      isbn:req.body.isbn,
      price:req.body.price,
      category:req.body.category,
      discountApplicable:req.body.discountApplicable,
      discountRate:req.body.discountRate,
      couponCode:req.body.couponCode

    });
  }).then(function () {
   res.sendStatus(200);
    console.log('Created');
    //res.status(200);
//  res.sendFile(path.join(__dirname + '/../views'+'/InventoryBookAddedConfirmPage.html'));
  });


};

exports.findBookRecords = (req, res) => {
  var x =req.body.id;
  console.log(x);
    bookrecords.findById(req.body.id).then(function(result) {
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
  //  res.send(result.bookName);
console.log(x);
 app.use(express.static(__dirname+'/../'));
res.json(x);
//res.sendFile(path.join(__dirname + '/../views'+'/InventoryBookAddedConfirmPage.html'),x);
  });
}

exports.updateBookRecords = (req, res) => {
//var check =   JSON.parse(req.body);

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
    couponCode:req.body.couponCode
  },
{
  where:
  {
    bookID : req.body.id
  }
}).then(function() {
//  res.sendStatus(200);
//  console.log('Trying to redirect');
 res.sendFile(path.join(__dirname + '/../views'+'/InventoryBookModifiedConfirmPage.html'));
})
};

exports.findAllBookRecords = (req, res) => {
//var check =   JSON.parse(req.body);
bookrecords.findAll({
  where: {
  //  author:req.params.author
  author : 'nikitha'
  }
}).then(function(result) {

  var x  = result;
  console.log(result.length);
   console.log(result[0].bookName);
   console.log(result[1].bookName);

   res.json(x);
});

 };


//module.exports=Book;
