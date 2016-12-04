var express = require('express');
var app = express();
var path = require('path');
var returnController= require('./controllers/ReturnAndCancel');
var inventoryManagementController= require('./controllers/InventoryManagement');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var fileUpload = require('express-fileupload');

app.use(fileUpload());

app.use(express.static(__dirname));
//including session
var session = require('client-sessions');

app.use(session({
  cookieName: 'session',
  secret: 'random_string_goes_here',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
}));



app.get('/', function(req, res) {

    res.sendFile(path.join(__dirname + '/views/index.html'));

});

//call to page to fetch books in inventory of the seller
app.get('/managebooks', function(req, res) {
 req.session.sellerID="17";
    res.sendFile(path.join(__dirname + '/views/ManageBooks.html'));

});


// call to page to enter new book records
app.get('/addbook', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/InventoryAddBooks.html'));
    //req.session.checkingSomethin="this is the session data";

});

// inserts book to database
app.post('/book', inventoryManagementController.postBook);

// fetches list if all books for a given seller id
app.post('/sellerbooklist',inventoryManagementController.getAllBooks);

// fetches book record for selected book id to be modified by seller
app.post('/getbookforid', inventoryManagementController.getBook);

//call to update book with modified details for a given id
app.put('/modifybook',inventoryManagementController.editBook);


//app.get('/editbook/:id',inventoryManagementController.getEditBookPage );

//call to get modify book html file
app.get('/editbook',inventoryManagementController.getEditBookPage);

// setting selected book id in session
app.post('/setbookid',inventoryManagementController.setBookIdSession);

//call to get the confirmation htmls
app.get('/editbooksuccess',inventoryManagementController.getBookkEditSuccessPage );
app.get('/addbookimage',inventoryManagementController.getBookAddSuccessPage );
app.post('/addbooksuccess',inventoryManagementController.uploadImage);

// call to delete selected book id
app.delete('/deletebook',inventoryManagementController.deleteBookForBookId);


// for adding class notes
app.get('/addclassnotes', inventoryManagementController.getAddClassNotesPage);
app.post('/uploadclassnotes', inventoryManagementController.addClassNotes);
app.post('/addclassnotesconfirm', inventoryManagementController.uploadClassNotes);

//for modifyin classnotes
app.get('/editclassnotes', inventoryManagementController.getAddClassNotesPage);
app.post('/getclassnotesforid', inventoryManagementController.findClassNotesForId);
app.post('/editclassnotesdetails', inventoryManagementController.editClassNotesForId);


app.get('/returnorder', returnController.getReturnOrderFormPage);
app.get('/returnorderdetails', returnController.getReturnOrderDetails);
app.post('/returnorderconfirm', returnController.confirmReturnOrder);

app.get('/cancelorder', returnController.getCancelOrderFormPage);
app.get('/cancelorderdetails', returnController.getCancelOrderDetails);
app.post('/cancelorderconfirm', returnController.confirmCancelOrder);

console.log('this is working');
app.listen(8080);
