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

var classnotesrecords = sequelize.define('classnotes_records', {
  classnotesId: {
      type: Sequelize.INTEGER,
      field: 'classnotesId',
      primaryKey: true
    },
  subject: {
      type: Sequelize.STRING,
      field: 'subject'
    },
    university:{
      type: Sequelize.STRING,
      field: 'university'
    },
    description:{
      type: Sequelize.STRING,
      field: 'description'
    },
    price:{
      type: Sequelize.INTEGER,
      field: 'price'
    },
    name:{
      type: Sequelize.STRING,
      field: 'name'
    },
    sellerId: {
        type: Sequelize.INTEGER,
        field: 'sellerId',

      }
});



exports.insertClassNotes = (req, res) => {

  sequelize.sync().then(function() {
    return classnotesrecords.create({
      name: req.session.classNotesName,
      subject:  req.session.classNotesSubject,
      description:req.session.classNotesDescription,
      university:req.session.classNotesUniversity,
      price:req.session.classNotesPrice
  });
  }).then(function () {

  res.sendFile(path.join(__dirname + '/../views'+'/InventoryClassNotesAddedConfirmPage.html'));
  });


};

exports.findClassNotesRecords = (req, res) => {
  //var x =req.session.bookId;
//  console.log(x);
    classnotesrecords.findById('201').then(function(result) {
      var x = {
    name:result.name,
    subject:result.subject,
  university:result.university,
  description:result.description,
  price:result.price
};

res.json(x);

  });
}

exports.updateClassNoteRecords = (req, res) => {
//var check =   JSON.parse(req.body);

  bookrecords.update({
    name: req.body.name,
    subject:req.body.subject,
    university:req.body.university,
    description:req.body.description,
    price:req.body.price,

  },
{
  where:
  {
    bookID : '201'
  }
}).then(function() {
//  res.sendStatus(200);
//  console.log('Trying to redirect');
 res.sendFile(path.join(__dirname + '/../views'+'/InventoryBookClassNotesModifiedPage.html'));
})
};



  exports.findAllClassNotesRecords = (req, res) =>
  {
    classnotesrecords.findAll(
    {
      where:
      {
        sellerID : '17'
      }
    })
    .then(function(result)
    {
      var x  = result;
      console.log(result.length);
       res.json(x);
     });

   };


   //Deleting a class notes record
   exports.deleteClassNotesForClassNotesId = (req, res) => {
   //var check =   JSON.parse(req.body);
   classnotesrecords.destroy({
     where: {
     //  author:req.params.author
     classnotesId : req.session.classnotesId
     }
   }).then(function(result) {

  res.sendStatus(200);
   });

    };


//module.exports=Book;
