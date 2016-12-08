//File to connect database,server and all third party API integrations


var express = require('express');
var app = express();
var path = require('path');


//Body Parser to  be written here in the app1.js file
//No need to include body-parser in controller and model file
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//To connect to database
var mysql = require('mysql');


var connection = mysql.createConnection
({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'foodforsoul'
});

connection.connect(function(err)
{

  if (err) throw err;
  else
  {
    console.log('You are now connected...')
  }
})


//Variable declarations to access Controller files
var returnController= require('./controllers/ReturnAndCancel');
var inventoryManagementController= require('./controllers/InventoryManagement');
var dashboardController= require('./controllers/Dashboard');
var sellerDashboardController= require('./controllers/SellerDashboard');
var adminDashboardController= require('./controllers/AdminDashboard');
var returnController= require('./controllers/ReturnAndCancel');
var inventoryManagementController= require('./controllers/InventoryManagement');
var homeController = require ('./controllers/home');
var all_productController = require ('./controllers/all_product');


//login and payment controllers
var confirmCheckout = require('./controllers/CheckoutController');
var placeYourOrder = require ('./controllers/orders');
var addItemtoCartController = require('./controllers/AddItemCart');
var productReviewController = require('./controllers/SubmitReview');
var deleteCartItemController = require('./controllers/DeleteCart');
var loginController = require('./controllers/Login');
var registerBuyerController = require('./controllers/Registersuccessbuyer');
var registerSellerController = require('./controllers/Registersuccessseller');
var resetPassword = require('./controllers/Resetpassword');


//Variable declaration to use file upload API
var fileUpload = require('express-fileupload');
app.use(fileUpload());


//To use sessions in the website
app.use(express.static(__dirname));
var session = require('client-sessions');
app.use(session
  ({
      cookieName: 'session',
      secret: 'random_string_goes_here',
      duration: 30 * 60 * 1000,
      activeDuration: 5 * 60 * 1000,
  }));


// To Route user to index.html Page
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to index.html Page
app.get('/', function(req, res)
{
    res.sendFile(path.join(__dirname + '/views/index.html'));
});


// To Route user to MyDashboard.html Page
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to MyDashboard.html Page
app.get('/MyDashboard', function(req, res)
{
    res.sendFile(path.join(__dirname + '/views/MyDashboard.html'));
});


// To Route user to SellerDashboard.html Page
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to SellerDashboard.html Page
app.get('/SellerDashboard', function(req, res)
{
    res.sendFile(path.join(__dirname + '/views/SellerDashboard.html'));
});


// To Route user to AdminDashboard.html Page
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to AdminDashboard.html Page
app.get('/AdminDashboard', function(req, res)
{
    res.sendFile(path.join(__dirname + '/views/AdminDashboard.html'));
});

// To Route user to Register/Login Page
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to Register/Login Page

app.get('/login',homeController.login);

// To Route user to Buyer Dashboard Page
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to Buyer Dashboard Page

app.get('/MyDashboard',homeController.dashboard);

// To Route user to My Cart Page
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to My Cart Page

app.get('/cart',homeController.cart);

// To Route user to Checkout Page
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to Checkout Page

app.get('/checkout',homeController.checkout);

// To Route user to Product Information Page
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to the product information

app.get('/product',homeController.product);




//-----------------------START OF BUYER DASHBOARD----------------------------//


// To Route user to cancelOrder function of Buyer Dashboard controller
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to cancelOrder function of Buyer Dashboard controller
app.get('/CancelOrder', dashboardController.cancelOrder);

// To Route user to returnReplace function of Buyer Dashboard controller
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to returnReplace function of Buyer Dashboard controller
app.get('/ReturnOrder', dashboardController.returnReplace);

// To Route user to addCard function of Buyer Dashboard controller
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to addCard function of Buyer Dashboard controller
app.get('/AddCard', dashboardController.addCard);

// To Route user to editCard function of Buyer Dashboard controller
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to editCard function of Buyer Dashboard controller
app.get('/editcard', dashboardController.editCard);

// To Route user to myOrders function of Buyer Dashboard controller
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to myOrders function of Buyer Dashboard controller
app.get('/MyOrders', dashboardController.myOrders);

// To Route user to mySavedCards function of Buyer Dashboard controller
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to mySavedCards function of Buyer Dashboard controller
app.get('/MySavedCards', dashboardController.mySavedCards);

// To Route user to reviewRating function of Buyer Dashboard controller
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to reviewRating function of Buyer Dashboard controller
app.get('/ReviewRating', dashboardController.reviewRating);

// To Route user to personalInformation function of Buyer Dashboard controller
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to personalInformation function of Buyer Dashboard controller
app.get('/PersonalInformation', dashboardController.personalInformation);

// To Route user to getbuyerProfile function of Buyer Dashboard controller
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to getbuyerProfile function of Buyer Dashboard controller
app.post('/buyerProfile',dashboardController.getbuyerProfile);

// To Route user to updateBuyer function of Buyer Dashboard controller
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to updateBuyer function of Buyer Dashboard controller
app.put('/updatebuyer',dashboardController.updateBuyer);

// To Route user to getAllOrders function of Buyer Dashboard controller
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to getAllOrders function of Buyer Dashboard controller
app.post('/buyerorderlist',dashboardController.getAllOrders);

// To Route user to getAllReviews function of Buyer Dashboard controller
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to getAllReviews function of Buyer Dashboard controller
app.post('/reviewlist',dashboardController.getAllReviews);

// To Route user to getAllCards function of Buyer Dashboard controller
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to getAllCards function of Buyer Dashboard controller
app.post('/carddetailslist',dashboardController.getAllCards);

// To Route user to newCard function of Buyer Dashboard controller
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to newCard function of Buyer Dashboard controller
app.post('/NewCard', dashboardController.newCard);

// To Route user to updateCard function of Buyer Dashboard controller
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to updateCard function of Buyer Dashboard controller
app.put('/updatecard',dashboardController.updateCard);

// To Route user to deleteCardForCardId function of Buyer Dashboard controller
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to deleteCardForCardId function of Buyer Dashboard controller
app.delete('/deletecard',dashboardController.deleteCardForCardId);

// To Route user to addNewCard function of Buyer Dashboard controller
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to addNewCard function of Buyer Dashboard controller
app.post('/addnewcard', dashboardController.addNewCard);

// To Route user to setBuyerIdSession function of Buyer Dashboard controller
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to setBuyerIdSession function of Buyer Dashboard controller
app.post('/setbuyerid',dashboardController.setBuyerIdSession);

// To Route user to setCardIdSession function of Buyer Dashboard controller
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to setCardIdSession function of Buyer Dashboard controller
app.post('/setcardid',dashboardController.setCardIdSession);

// To Route user to setOrderIdSession function of Buyer Dashboard controller
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to setOrderIdSession function of Buyer Dashboard controller
app.post('/setorderid',dashboardController.setOrderIdSession);

// To Route user to getCard function of Buyer Dashboard controller
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to getCard function of Buyer Dashboard controller
app.post('/getcardforid', dashboardController.getCard);

// To Route user to getTopRated function of Buyer Dashboard controller
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to getTopRated function of Buyer Dashboard controller
app.post('/getTopRated', dashboardController.getTopRated);


//-----------------------END OF BUYER DASHBOARD----------------------------//



//-----------------------START OF SELLER DASHBOARD----------------------------//


// To Route user to ManageNotes function of Seller Dashboard controller
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to ManageNotes function of Seller Dashboard controller
app.get('/ManageNotes', sellerDashboardController.manageNotes);

// To Route user to addBook function of Seller Dashboard controller
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to getBook function of Seller Dashboard controll
app.get('/AddBook', sellerDashboardController.addBook);

// To Route user to ordersReport function of Seller Dashboard controller
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to ordersReport function of Seller Dashboard controller
app.get('/OrdersReport', sellerDashboardController.ordersReport);

// To Route user to booksReport function of Seller Dashboard controller
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to booksReport function of Seller Dashboard controller
app.get('/BooksReport', sellerDashboardController.booksReport);

// To Route user to notesReport function of Seller Dashboard controller
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to notesReport function of Seller Dashboard controller
app.get('/NotesReport', sellerDashboardController.notesReport);

// To Route user to addNotes function of Seller Dashboard controller
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to addNotes function of Seller Dashboard controller
app.get('/AddNotes', sellerDashboardController.addNotes);

app.get('/SellerProfile',sellerDashboardController.sellerProfile);

// To Route user to getsellerProfile function of Seller Dashboard controller
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to getsellerProfile function of Seller Dashboard controller
app.post('/sellerProfile',sellerDashboardController.getsellerProfile);

// To Route user to updateSeller function of Seller Dashboard controller
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to updateSeller function of Seller Dashboard controller
app.put('/updateseller',sellerDashboardController.updateSeller);

// To Route user to getnewProducts function of Seller Dashboard controller
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to getnewProducts function of Seller Dashboard controller
app.post('/getnewProducts', sellerDashboardController.getnewProducts);

// To Route user to getNewOffers function of Seller Dashboard controller
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to getNewOffers function of Seller Dashboard controller
app.post('/getNewOffers', sellerDashboardController.getNewOffers);


//-----------------------END OF SELLER DASHBOARD----------------------------//


//-----------------------START OF ADMIN DASHBOARD----------------------------//


// To Route user to siteAnalyticsReport function of Admin Dashboard controller
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to siteAnalyticsReport function of Admin Dashboard controller
app.get('/SiteAnalyticsReport', adminDashboardController.siteAnalyticsReport);

// To Route user to addRemoveAdmin function of Admin Dashboard controller
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to addRemoveAdmin function of Admin Dashboard controller
app.get('/AddRemoveAdmin',adminDashboardController.addRemoveAdmin);

// To Route user to addAdmin function of Admin Dashboard controller
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to addAdmin function of Admin Dashboard controller
app.get('/AddAdmin',adminDashboardController.addAdmin);

// To Route user to adminProfile function of Admin Dashboard controller
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to adminProfile function of Admin Dashboard controller
app.get('/AdminProfile',adminDashboardController.adminProfile);


// To Route user to newsletter function of Admin Dashboard controller
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to newsletter function of Admin Dashboard controller
app.get('/Newsletter', adminDashboardController.newsletter);

// To Route user to newAdmin function of Admin Dashboard controller
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to newAdmin function of Admin Dashboard controller
app.post('/NewAdmin', adminDashboardController.newAdmin);

// To Route user to getAllAdmins function of Admin Dashboard controller
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to getAllAdmins function of Admin Dashboard controller
app.post('/adminlist',adminDashboardController.getAllAdmins);

// To Route user to deleteAdminForAdminId function of Admin Dashboard controller
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to deleteAdminForAdminId function of Admin Dashboard controller
app.delete('/deleteAdmin',adminDashboardController.deleteAdminForAdminId);

// To Route user to AddRemoveAdmin.html Page
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to AddRemoveAdmin.html Page
app.get('/addRemoveAdmin', function(req, res)
{
    res.sendFile(path.join(__dirname + '/views/AddRemoveAdmin.html'));
});

// To Route user to getAdminProfile function of Admin Dashboard controller
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to getAdminProfile function of Admin Dashboard controller
app.post('/adminProfile',adminDashboardController.getAdminProfile);

// To Route user to updateAdmin function of Admin Dashboard controller
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to updateAdmin function of Admin Dashboard controller
app.put('/updateadmin',adminDashboardController.updateAdmin);

// To Route user to sendEmailToUsers function of Admin Dashboard controller
//Pre-conditions   --> Takes input request from the user clicks (browser)
//Post-conditions  --> Routes the user to sendEmailToUsers function of Admin Dashboard controller
app.post('/pushMail', adminDashboardController.sendEmailToUsers);


//-----------------------END OF ADMIN DASHBOARD----------------------------//

app.post('/ReturnOrderConfirmPage', returnController.confirmReturnOrder);
app.post('/CancelOrderConfirmPage', returnController.confirmReturnOrder);
//app.post('/InventoryAddNotes', inventoryManagementController.confirmAddNotes);
//app.post('/InventoryModifyClassNotes', inventoryManagementController.confirmModifyNotes);
//app.post('/InventoryAddBooks', inventoryManagementController.confirmAddBooks);




//call to page to fetch books in inventory of the seller
app.get('/managebooks', function(req, res) {
                        req.session.emailID=  'nikithauc@gmail.com';
 req.session.sellerID=  req.session.emailID;
//  req.session.sdOrderId='51';

    res.sendFile(path.join(__dirname + '/views/ManageBooks.html'));

});


// call to page to enter new book records

app.get('/addbookpage', inventoryManagementController.getAddBookPage);


app.post('/ReturnOrderConfirmPage', returnController.confirmReturnOrder);
app.post('/CancelOrderConfirmPage', returnController.confirmReturnOrder);


//login and payment 'gets'
app.get('/Register', loginController.register);
app.get('/RegisterSeller', loginController.registerSeller);
app.get('/ForgotPassword', loginController.forgotPassword);
app.get('/product', loginController.getProductPage);
app.get('/ViewCart', addItemtoCartController.viewcart);
app.get('/CartCheckout', confirmCheckout.checkoutcart);
app.get('/gotoCart', addItemtoCartController.gotocart);
app.get('/ConfirmOrder', confirmCheckout.checkoutConfirm);
app.get('/gotoCheckout', confirmCheckout.gotocheckout);
app.get('/UserLogout', loginController.confirmLogout);
app.get('/index',homeController.homepage);
app.get('/ResetPasswordPage', resetPassword.gotoReset);
///////////////////


//login and payment post's
app.post('/UserLogin', loginController.confirmLogin);
app.post('/Registersuccessbuyer', registerBuyerController.confirmRegistrationbuyer);
app.post('/Registersuccessseller', registerSellerController.confirmsellerRegistration);
app.post('/Addtocart', addItemtoCartController.addingToCart);
app.post('/Reset', resetPassword.confirmPasswordreset);
app.post('/CheckPassword', resetPassword.resetPasswordCheck);
app.post('/Checkout', confirmCheckout.checkoutConfirm);
//////////////


//login and payment delete's
app.delete('/RemoveItem', deleteCartItemController.confirmDelete);
app.post('/SubmitReview', productReviewController.submitReview);
app.post('/cartdetails',addItemtoCartController.getAllItems);
app.post('/cartAddress',addItemtoCartController.getAddress);
app.post('/cartCard',addItemtoCartController.getCard);
app.post('/bookReview',productReviewController.getReview);
app.put('/cartUpdate',addItemtoCartController.updateCart);
app.post('/insertOrder', placeYourOrder.myOrders);
//app.post('/bookselected',addItemtoCartController.addingToCart);
app.get('/checkuserlogin', loginController.checkuserlogin);
//////////////////


// inserts book to daddclassnotespageatabase
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

//call to get modify book form page
app.get('/editbook',inventoryManagementController.getEditBookPage);

// setting selected book id in session
app.post('/setbookid',inventoryManagementController.setBookIdSession);

// setting selected class notes id in session
app.post('/setclassnotesid',inventoryManagementController.setClassNotesIdSession);


//call to get the confirmation /succcess pages
app.get('/editbooksuccess',inventoryManagementController.getBookkEditSuccessPage );
app.get('/addbookimage',inventoryManagementController.getBookAddSuccessPage );
app.post('/addbooksuccess',inventoryManagementController.uploadImage);

// call to delete selected book id
app.delete('/deletebook',inventoryManagementController.deleteBookRecords);

// call to delete selected class notes id
app.delete('/deleteclassnotes',inventoryManagementController.deleteClassNotesForClassNotesId);

// for adding class notes
app.get('/addclassnotes', inventoryManagementController.getAddClassNotesPage);
app.post('/addclassnotesdetails', inventoryManagementController.addClassNotes);
app.get('/uploadclassnotes', inventoryManagementController.getUploadClassNotesPage);
app.post('/addclassnotesconfirm', inventoryManagementController.uploadClassNotes);

// for returning order
app.get('/returnorder', returnController.getReturnOrderFormPage);
app.get('/returnorderdetails', returnController.getReturnOrderDetails);
app.post('/returnorderconfirm', returnController.confirmReturnOrder);

//for cancelling order
app.get('/cancelorder', returnController.getCancelOrderFormPage);
app.get('/cancelorderdetails', returnController.getCancelOrderDetails);
app.post('/cancelorderconfirm', returnController.confirmCancelOrder);


//Snehil: fetches required books from the database
app.post('/books_data',all_productController.booksData);

//Snehil: fetches required class notes from the database
app.post('/notes_data',all_productController.notesData);

//Snehil: fetches required books for PRODUCT.html from the database
app.post('/bookInfo',all_productController.bookInfo);

//Snehil: fetches required class notes for PRODUCT.html from the database
app.post('/notesInfo',all_productController.notesInfo);

console.log('Server UP! Go 8080');
app.listen(8080);

app.get('/faq', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/FFSFaq.html'));
    //req.session.checkingSomethin="this is the session data";

});
