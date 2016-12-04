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

var orderrecords = sequelize.define('orders_records', {
  orderId:
   {
      type: Sequelize.INTEGER,
      field: 'orderID',
      primaryKey: true
    },
  buyerId:
  {
        type: Sequelize.INTEGER,
        field: 'buyerID',
  },

  deliveryDate:
  {
      type: Sequelize.STRING,
      field: 'deliveryDate'
  },
  orderStatus:
  {
      type: Sequelize.STRING,
      field: 'orderStatus'
  },
  price:
  {
      type: Sequelize.INTEGER,
      field: 'price'
  }

});



exports.insertOrderRecords = (req, res) => {
  console.log(''+req.body.name);
  console.log(''+req.body.discountEndDate);
  console.log(''+req.body.discountApplicable1);
  sequelize.sync().then(function() {
    return orderrecords.create({
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

exports.findOrderRecords = (req, res) => {
  //var x =req.session.bookId;
//  console.log(x);
    orderrecords.findById(req.session.bookId).then(function(result) {
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

exports.updateOrderRecords = (req, res) => {
//var check =   JSON.parse(req.body);

  orderrecords.update({
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

exports.findAllOrderRecords = (req, res) => {
orderrecords.findAll(
  {
    where:
    {
        buyerID : '1'
      }
  })
  .then(function(result)
  {
    var x  = result;
    console.log(result.length);

    res.json(x);
  });
};


 //Deleting a book record
 exports.deleteBookForBookId = (req, res) => {
 //var check =   JSON.parse(req.body);
 orderrecords.destroy({
   where: {
   //  author:req.params.author
   bookId : req.session.bookId
   }
 }).then(function(result) {

res.sendStatus(200);
 });

  };




//module.exports=Book;
