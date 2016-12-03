var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var Sequelize = require('sequelize');
var sequelize = new Sequelize('foodforsoul1', 'root', 'root',{
  define: {
   timestamps: true
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

exports.insertBookRecords = (req, res) => {
  console.log(''+req.body.name);
  console.log(''+req.body.discountEndDate);
  console.log(''+req.body.discountApplicable1);
  sequelize.sync({
    force: true
  }).then(function() {
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
      couponCode:req.body.couponCode,
      sellerID:req.session.sellerID

    });
  }).then(function () {
  res.sendStatus(200);
  //  console.log('Created');
    //res.status(200);
  //res.sendFile(path.join(__dirname + '/../views'+'/InventoryBookAddedConfirmPage.html'));
  });


};

exports.findBookRecords = (req, res) => {
  //var x =req.session.bookId;
//  console.log(x);
    bookrecords.findById(req.session.bookId).then(function(result) {
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
//console.log(x);
 //app.use(express.static(__dirname+'/../'));
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
    bookID : req.session.bookId
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
  sellerID : '17'
  }
}).then(function(result) {

  var x  = result;
  console.log(result.length);


   res.json(x);
});

 };


 //Deleting a book record
 exports.deleteBookForBookId = (req, res) => {
 //var check =   JSON.parse(req.body);
 bookrecords.destroy({
   where: {
   //  author:req.params.author
   bookId : req.session.bookId
   }
 }).then(function(result) {

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
           $gt: 30
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
