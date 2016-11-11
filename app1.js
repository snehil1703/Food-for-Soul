var express = require('express');
var app = express();
var path = require('path');


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

app.use(express.static(__dirname ));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
    console.log('Landing Page');
});

// app.get('/BuyerDashboard', function(req, res) {
//     res.sendFile(path.join(__dirname + '/views/BuyerDashboard.html'));
//     console.log('Buyer Dashboard Page');
// });

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
app.get('/EditCard', dashboardController.editCard);
app.get('/MyOrders', dashboardController.myOrders);
app.get('/MySavedCards', dashboardController.mySavedCards);
app.get('/ReviewRating', dashboardController.reviewRating);
app.get('/PersonalInformation', dashboardController.personalInformation);

app.get('/ManageBooks', sellerDashboardController.manageBooks);
app.get('/ManageNotes', sellerDashboardController.manageNotes);
app.get('/AddBook', sellerDashboardController.addBook);
app.get('/EditBook', sellerDashboardController.editBook);
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

app.post('/ReturnOrderConfirmPage', returnController.confirmReturnOrder);
app.post('/CancelOrderConfirmPage', returnController.confirmReturnOrder);
app.post('/InventoryAddNotes', inventoryManagementController.confirmAddNotes);
app.post('/InventoryModifyClassNotes', inventoryManagementController.confirmModifyNotes);
app.post('/InventoryAddBooks', inventoryManagementController.confirmAddBooks);
app.post('/InventoryModifyBooks', inventoryManagementController.confirmModifyBooks);
app.post('/Login', loginController.confirmLogin);
app.post('/Registersuccessbuyer', registerBuyerController.confirmRegistrationbuyer);
app.post('/Registersuccessseller', registerSellerController.confirmRegistration);
app.post('/Forgotpassword', resetPassword.confirmPasswordreset);
app.post('/Deletecartitem', deleteCartItem.confirmDelete);
app.post('/Checkout', confirmCheckout.checkoutConfirm);



console.log('Server UP! Go 8080');
app.listen(8080);
