var express = require('express');
var app = express();
var path = require('path');

var Book  = require('../models/Book.js');
//var det = require('../models/Book.js');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
//app.use(express.bodyParser({uploadDir:'./uploads'}));
app.use(bodyParser.urlencoded({ extended: true }));





// exports.confirmAddBooks=(Book.insertBookRecords);
// exports.confirm2 = (req, res) => {
//   console.log("confirm 2");
// res.sendFile(path.join(__dirname + '/../views'+'/InventoryBookAddedConfirmPage.html'));
// };
//exports.confirmAddBooks=( Book.insertBookRecords);
//=> {
// Book.bookrecords;

//console.log(det.book);
//  };

// exports.confirmAddBooks= (req, res) => {
//   console.log('this is in confirmAddBooks');
//   Book.insertBookRecords;
//   // {
//   //   console.log("called insertBookRecords");
//   //     res.sendFile(path.join(__dirname + '/../views'+'/InventoryBookAddedConfirmPage.html'));
//   // }
//   // else{
//   //   console.log("Error!!");
//   // }
// };
//
// var fileUpload = require('express-fileupload');
//
// app.use(fileUpload());


exports.postBook = (req, res) => {

//     var sampleFile;
//
// console.log(req.files);
//   if (!req.files) {
//       console.log('No files were uploaded.');
//     //  return;
//   }
//
//   sampleFile =  req.files.imagefile;
//   sampleFile.mv(__dirname +'/../productImages/'+req.body.isbn+'.jpg', function(err) {
//       if (err) {
//           res.status(500).send(err);
//       }
//       else {
//           console.log('File uploaded!');
//       }
//   });

  Book.insertBookRecords(req, res);
}

exports.getBook = (req, res) => {
  Book.findBookRecords(req, res);
}

exports.getAllBooks = (req, res) => {
  Book.findAllBookRecords(req, res);
}


exports.editBook = (req, res) => {
  Book.updateBookRecords(req, res);
}


exports.getEditBookPage = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/InventoryModifyBooks.html'));
  //  console.log('this is in 2controllers');
};

exports.getBookAddSuccessPage = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/InventoryBookAddedConfirmPage.html'));
  //  console.log('this is in 2controllers');
};


exports.fetchBookDetailsForBookId=( Book.findBookRecords);

exports.getBookkEditSuccessPage = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/InventoryBookModifiedConfirmPage.html'));

    console.log('this is in edit confirm');

};


exports.confirmAddNotes = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/InventoryClassNotesAddedConfirmPage.html'));

    console.log('this is in3 controllers');

};


exports.confirmModifyNotes = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/InventoryClassNotesModifiedPage.html'));

    console.log('this is in 4 controllers');

};
