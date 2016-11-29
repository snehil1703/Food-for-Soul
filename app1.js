
var express = require('express');
var app = express();
var path = require('path');
var returnController= require('./controllers/ReturnAndCancel');
var inventoryManagementController= require('./controllers/InventoryManagement');

//Body Parser to  be written here in the app1.js file
//No need to include body-parser in controller and model file
//Works fine here
var bodyParser = require('body-parser');
app.use(bodyParser.json());
//app.use(express.bodyParser({uploadDir:'./uploads'}));
app.use(bodyParser.urlencoded({ extended: true }));


//To connect to database
var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'foodforsoul'
})

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
})
var dashboardController= require('./controllers/Dashboard');
var sellerDashboardController= require('./controllers/SellerDashboard');
var adminDashboardController= require('./controllers/AdminDashboard');
var returnController= require('./controllers/ReturnAndCancel');
var inventoryManagementController= require('./controllers/InventoryManagement');
var loginController = require('./controllers/Login');
var registerBuyerController = require('./controllers/Registersuccessbuyer');
var registerSellerController = require('./controllers/Registersuccessseller');
var resetPassword = require('./controllers/Resetpassword');
var deleteCartItem = require('./controllers/DeleteCart');
var confirmCheckout = require('./controllers/CheckoutController');
var homeController = require ('./controllers/home');

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
    console.log('Landing Page');
});

// app.get('/BuyerDashboard', function(req, res) {
//     res.sendFile(path.join(__dirname + '/views/BuyerDashboard.html'));
//     console.log('Buyer Dashboard Page');
// });

app.get('/MyDashboard', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/MyDashboard.html'));
    console.log('Buyer Dashboard Page');
});


app.get('/SellerDashboard', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/SellerDashboard.html'));
    console.log('Admin Dashboard Page');
});


app.get('/AdminDashboard', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/AdminDashboard.html'));
    console.log('Admin Dashboard Page');
});

app.get('/login',homeController.login);
app.get('/MyDashboard',homeController.dashboard);
app.get('/cart',homeController.cart);
app.get('/checkout',homeController.checkout);
app.get('/CancelOrder', dashboardController.cancelOrder);
app.get('/ReturnOrder', dashboardController.returnReplace);
app.get('/AddCard', dashboardController.addCard);
app.get('/editcard', dashboardController.editCard);
app.get('/MyOrders', dashboardController.myOrders);
app.get('/MySavedCards', dashboardController.mySavedCards);
app.get('/ReviewRating', dashboardController.reviewRating);
app.get('/PersonalInformation', dashboardController.personalInformation);

//call to page to fetch books in inventory of the seller
app.get('/managebooks', function(req, res) {
 req.session.sellerID="17";
    res.sendFile(path.join(__dirname + '/views/ManageBooks.html'));

});


// call to page to enter new book records
app.get('/addbookpage', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/InventoryAddBooks.html'));
    //req.session.checkingSomethin="this is the session data";

});

app.get('/ManageNotes', sellerDashboardController.manageNotes);
app.get('/AddBook', sellerDashboardController.addBook);
app.get('/EditNotes', sellerDashboardController.editNotes);
app.get('/OrdersReport', sellerDashboardController.ordersReport);
app.get('/BooksReport', sellerDashboardController.booksReport);
app.get('/NotesReport', sellerDashboardController.notesReport);
app.get('/AddNotes', sellerDashboardController.addNotes);
app.get('/Register', loginController.register);
app.get('/RegisterSeller', loginController.registerSeller);
app.get('/ForgotPassword', loginController.forgotPassword);
app.get('/SiteAnalyticsReport', adminDashboardController.siteAnalyticsReport);
app.get('/login',homeController.login);
app.get('/SellerProfile',sellerDashboardController.sellerProfile);
app.get('/AddRemoveAdmin',adminDashboardController.addRemoveAdmin);
app.get('/AddAdmin',adminDashboardController.addAdmin);
app.get('/AdminProfile',adminDashboardController.adminProfile);
app.get('/Newsletter', adminDashboardController.newsletter);

app.post('/ReturnOrderConfirmPage', returnController.confirmReturnOrder);
app.post('/CancelOrderConfirmPage', returnController.confirmReturnOrder);
//app.post('/InventoryAddNotes', inventoryManagementController.confirmAddNotes);
//app.post('/InventoryModifyClassNotes', inventoryManagementController.confirmModifyNotes);
//app.post('/InventoryAddBooks', inventoryManagementController.confirmAddBooks);
//app.post('/Login', loginController.confirmLogin);
app.post('/Registersuccessbuyer', registerBuyerController.confirmRegistrationbuyer);
app.post('/Registersuccessseller', registerSellerController.confirmRegistration);
app.post('/Forgotpassword', resetPassword.confirmPasswordreset);
app.post('/Deletecartitem', deleteCartItem.confirmDelete);
app.post('/Checkout', confirmCheckout.checkoutConfirm);

//inserts new admin details to database
app.post('/NewAdmin', adminDashboardController.newAdmin);

//fetches list of all admins from the database
app.post('/adminlist',adminDashboardController.getAllAdmins);

//Delete a particular admin from the database
app.delete('/deleteAdmin',adminDashboardController.deleteAdminForAdminId);

//Display addRemoveAdmin Page after successful deletion
app.get('/addRemoveAdmin', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/AddRemoveAdmin.html'));

});


//fetches seller profile from the database
app.post('/sellerProfile',sellerDashboardController.getsellerProfile);
//Updates the changes made to the seller profile
app.put('/updateseller',sellerDashboardController.updateSeller);

//fetches buyer profile from the database
app.post('/buyerProfile',dashboardController.getbuyerProfile);
//Updates the changes made to the buyer profile
app.put('/updatebuyer',dashboardController.updateBuyer);

// fetches list if all orders for a given buyer id
app.post('/buyerorderlist',dashboardController.getAllOrders);

// fetches list if all reviews for a given buyer id
app.post('/reviewlist',dashboardController.getAllReviews);

// fetches list if all payment cards for a given buyer id
app.post('/carddetailslist',dashboardController.getAllCards);

//inserts new payment card details to database
app.post('/NewCard', dashboardController.newCard);

//Updates the changes made to the payment card
app.put('/updatecard',dashboardController.updateCard);

// call to delete selected payment card
app.delete('/deletecard',dashboardController.deleteCardForCardId);

//fetches admin profile from the database
app.post('/adminProfile',adminDashboardController.getAdminProfile);
//Updates the changes made to the buyer profile
app.put('/updateadmin',adminDashboardController.updateAdmin);


//inserts new card details into the database
app.post('/addnewcard', dashboardController.addNewCard);

// inserts book to database
app.post('/book', inventoryManagementController.postBook);

// fetches list if all books for a given seller id
app.post('/sellerbooklist',inventoryManagementController.getAllBooks);

// fetches book record for selected book id to be modified by seller
app.post('/getbookforid', inventoryManagementController.getBook);

//call to update book with modified details for a given id
app.put('/modifybook',inventoryManagementController.editBook);

// fetches list if all classnotes for a given seller id
app.post('/sellerclassnoteslist',inventoryManagementController.getAllClassNotes);

//app.get('/editbook/:id',inventoryManagementController.getEditBookPage );

//call to get modify book html file
app.get('/editbook',inventoryManagementController.getEditBookPage);

// setting selected book id in session
app.post('/setbookid',inventoryManagementController.setBookIdSession);

// setting selected class notes id in session
app.post('/setclassnotesid',inventoryManagementController.setClassNotesIdSession);

// setting selected buyer id in session
app.post('/setbuyerid',dashboardController.setBuyerIdSession);

// setting selected card id in session
app.post('/setcardid',dashboardController.setCardIdSession);

// setting selected order id in session
app.post('/setorderid',dashboardController.setOrderIdSession);

// fetches payment record for selected card id to be modified by buyer
app.post('/getcardforid', dashboardController.getCard);

// fetches Top rated records for newsletter
app.post('/getTopRated', dashboardController.getTopRated);

// fetches new Records for newsletter
app.post('/getnewProducts', sellerDashboardController.getnewProducts);

// fetches new Offers with discount > 30% for newsletter
app.post('/getNewOffers', sellerDashboardController.getNewOffers);

//call to get the confirmation htmls
app.get('/editbooksuccess',inventoryManagementController.getBookkEditSuccessPage );
app.get('/addbookimage',inventoryManagementController.getBookAddSuccessPage );
app.post('/addbooksuccess',inventoryManagementController.uploadImage);

// call to delete selected book id
app.delete('/deletebook',inventoryManagementController.deleteBookForBookId);

// call to delete selected class notes id
app.delete('/deleteclassnotes',inventoryManagementController.deleteClassNotesForClassNotesId);

// for adding class notes
app.get('/addclassnotespage', inventoryManagementController.getAddClassNotesPage);
app.post('/addclassnotes', inventoryManagementController.addClassNotes);
app.post('/uploadclassnotes', inventoryManagementController.uploadClassNotes);

//for modifyin classnotes
app.get('/addclassnotespage', inventoryManagementController.getAddClassNotesPage);
app.post('/getclassnotesforid', inventoryManagementController.findClassNotesForId);
app.post('/editclassnotes', inventoryManagementController.editClassNotesForId);


app.get('/returnorder', returnController.getReturnOrderFormPage);
app.get('/returnorderdetails', returnController.getReturnOrderDetails);
app.post('/returnorderconfirm', returnController.confirmReturnOrder);

app.get('/cancelorder', returnController.getCancelOrderFormPage);
app.get('/cancelorderdetails', returnController.getCancelOrderDetails);
app.post('/cancelorderconfirm', returnController.confirmCancelOrder);


console.log('Server UP! Go 8080');
app.listen(8080);
