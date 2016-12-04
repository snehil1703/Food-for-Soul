var express = require('express');
var app = express();
var path = require('path');

var Book  = require('../models/Book.js');
var ClassNotes  = require('../models/Classnote.js');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
//app.use(express.bodyParser({uploadDir:'./uploads'}));
app.use(bodyParser.urlencoded({ extended: true }));

var fileUpload = require('express-fileupload');

app.use(fileUpload());


exports.uploadImage = (req, res) =>  {
  var sampleFile;

  if (!req.files) {
      res.send('No files were uploaded.');
      return;
  }

  sampleFile = req.files.sellerfile;
  sampleFile.mv(__dirname +'/../productImages/'+req.session.isbn+'.jpg', function(err) {
      if (err) {
          res.status(500).send(err);
      }


       {
          res.sendFile(path.join(__dirname + '/../views'+'/InventoryBookAddedConfirmPage.html'));
      }
  });


}//end of upload file
exports.postBook = (req, res) => {
req.session.isbn=req.body.isbn;
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

};

exports.setBookIdSession = (req, res) => {
    console.log(req.body.bookId);
  req.session.bookId= req.body.bookId;
  res.sendStatus(200);
  };


exports.getBookAddSuccessPage = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/InventoryAddBookAddImage.html'));

};


exports.fetchBookDetailsForBookId=( Book.findBookRecords);

exports.getBookkEditSuccessPage = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views'+'/InventoryBookModifiedConfirmPage.html'));

    console.log('this is in edit confirm');

};





exports.deleteBookForBookId = (req, res) => {
  req.session.bookId= req.body.bookId;
 Book.deleteBookForBookId(req, res) ;
    //console.log('this is in3 controllers');

};

//Starting for Class Notes
exports.addClassNotes = (req, res) => {
  req.session.classNotesName= req.body.name;
    req.session.classNotesSubject= req.body.subject;
    req.session.classNotesDescription= req.body.description;
    req.session.classNotesPrice= req.body.price;
  req.session.classNotesUniversity= req.body.university;

console.log('price set in session'+req.session.classNotesPrice);
  res.sendFile(path.join(__dirname + '/../views'+'/InventoryUploadClassNotes.html'));

};

exports.uploadClassNotes= (req, res) => {
  var sampleFile;

  if (!req.files) {
      res.send('No files were uploaded.');
      return;
  }

  sampleFile = req.files.sellerfile;
  sampleFile.mv(__dirname +'/../classnotes/'+req.session.classNotesName+'.pdf', function(err) {
      if (err) {
          res.status(500).send(err);
      }


       {
        ClassNotes.insertClassNotes(req,res);
      }
  });
};// end of upload classnotes

exports.getAddClassNotesPage = (req, res) => {

  res.sendFile(path.join(__dirname + '/../views'+'/InventoryAddClassNotesPage.html'));

};

exports.findClassNotesForId = (req, res) => {

    Book.findClassNotesRecords(req, res);
}

exports.editClassNotesForId = (req, res) => {

    Book.updateClassNoteRecords(req, res);
}
