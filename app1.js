
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
var all_productController = require ('./controllers/all_product');

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

app.get('/BooksPage',all_productController.BooksPage);
app.get('/Home_Books/GoodReadsPage',all_productController.GoodReadsPage);
app.get('/Home_Books/GoodReads/Children',all_productController.Children);
app.get('/Home_Books/GoodReads/Comics',all_productController.Comics);
app.get('/Home_Books/GoodReads/Comics_Marvel',all_productController.Comics_Marvel);
app.get('/Home_Books/GoodReads/Comics_DC',all_productController.Comics_DC);
app.get('/Home_Books/GoodReads/Comics_DarkHorse',all_productController.Comics_DarkHorse);
app.get('/Home_Books/GoodReads/Comics_Image',all_productController.Comics_Image);
app.get('/Home_Books/GoodReads/Comics_Others',all_productController.Comics_Others);
app.get('/Home_Books/GoodReads/Humor',all_productController.Humor);
app.get('/Home_Books/GoodReads/Mystery',all_productController.Mystery);
app.get('/Home_Books/GoodReads/Mystery_Mystery',all_productController.Mystery_Mystery);
app.get('/Home_Books/GoodReads/Mystery_Thriller',all_productController.Mystery_Thriller);
app.get('/Home_Books/GoodReads/Mystery_Writing',all_productController.Mystery_Writing);
app.get('/Home_Books/GoodReads/Mystery_Others',all_productController.Mystery_Others);
app.get('/Home_Books/GoodReads/Romance',all_productController.Romance);
app.get('/Home_Books/GoodReads/ScienceFiction',all_productController.ScienceFiction);
app.get('/Home_Books/GoodReads/ScienceFiction_Fantasy',all_productController.ScienceFiction_Fantasy);
app.get('/Home_Books/GoodReads/ScienceFiction_Gaming',all_productController.ScienceFiction_Gaming);
app.get('/Home_Books/GoodReads/ScienceFiction_Science',all_productController.ScienceFiction_Science);
app.get('/Home_Books/GoodReads/ScienceFiction_Writing',all_productController.ScienceFiction_Writing);
app.get('/Home_Books/GoodReads/ScienceFiction_Others',all_productController.ScienceFiction_Others);
app.get('/Home_Books/GoodReads/Teen',all_productController.Teen);
app.get('/Home_Books/KnowledgePage',all_productController.KnowledgePage);
app.get('/Home_Books/Knowledge/Business',all_productController.Business);
app.get('/Home_Books/Knowledge/Computers',all_productController.Computers);
app.get('/Home_Books/Knowledge/Computers_Databases',all_productController.Computers_Databases);
app.get('/Home_Books/Knowledge/Computers_Graphics',all_productController.Computers_Graphics);
app.get('/Home_Books/Knowledge/Computers_Hardware',all_productController.Computers_Hardware);
app.get('/Home_Books/Knowledge/Computers_Internet',all_productController.Computers_Internet);
app.get('/Home_Books/Knowledge/Computers_Mobile',all_productController.Computers_Mobile);
app.get('/Home_Books/Knowledge/Computers_Networking',all_productController.Computers_Networking);
app.get('/Home_Books/Knowledge/Computers_OperatingSystems',all_productController.Computers_OperatingSystems);
app.get('/Home_Books/Knowledge/Computers_Programming',all_productController.Computers_Programming);
app.get('/Home_Books/Knowledge/Computers_Security',all_productController.Computers_Security);
app.get('/Home_Books/Knowledge/Computers_Software',all_productController.Computers_Software);
app.get('/Home_Books/Knowledge/Computers_Web',all_productController.Computers_Web);
app.get('/Home_Books/Knowledge/Computers_Others',all_productController.Computers_Others);
app.get('/Home_Books/Knowledge/Education',all_productController.Education);
app.get('/Home_Books/Knowledge/History',all_productController.History);
app.get('/Home_Books/Knowledge/Law',all_productController.Law);
app.get('/Home_Books/Knowledge/Literature',all_productController.Literature);
app.get('/Home_Books/Knowledge/Medical',all_productController.Medical);
app.get('/Home_Books/Knowledge/Medical_Administration',all_productController.Medical_Administration);
app.get('/Home_Books/Knowledge/Medical_Dentistry',all_productController.Medical_Dentistry);
app.get('/Home_Books/Knowledge/Medical_History',all_productController.Medical_History);
app.get('/Home_Books/Knowledge/Medical_Medicine',all_productController.Medical_Medicine);
app.get('/Home_Books/Knowledge/Medical_Nursing',all_productController.Medical_Nursing);
app.get('/Home_Books/Knowledge/Medical_Psychology',all_productController.Medical_Psychology);
app.get('/Home_Books/Knowledge/Medical_Research',all_productController.Medical_Research);
app.get('/Home_Books/Knowledge/Medical_Veterinary',all_productController.Medical_Veterinary);
app.get('/Home_Books/Knowledge/Medical_Others',all_productController.Medical_Others);
app.get('/Home_Books/Knowledge/Politics',all_productController.Politics);
app.get('/Home_Books/Knowledge/Reference',all_productController.Reference);
app.get('/Home_Books/Knowledge/Sciences',all_productController.Sciences);
app.get('/Home_Books/Knowledge/Sports',all_productController.Sports);
app.get('/Home_Books/LifestylePage',all_productController.LifestylePage);
app.get('/Home_Books/Lifestyle/Arts',all_productController.Arts);
app.get('/Home_Books/Lifestyle/Arts_Architecture',all_productController.Arts_Architecture);
app.get('/Home_Books/Lifestyle/Arts_Collections',all_productController.Arts_Collections);
app.get('/Home_Books/Lifestyle/Arts_DecorativeArts',all_productController.Arts_DecorativeArts);
app.get('/Home_Books/Lifestyle/Arts_GraphicDesign',all_productController.Arts_GraphicDesign);
app.get('/Home_Books/Lifestyle/Arts_Painting',all_productController.Arts_Painting);
app.get('/Home_Books/Lifestyle/Arts_PerformingArts',all_productController.Arts_PerformingArts);
app.get('/Home_Books/Lifestyle/Arts_Study',all_productController.Arts_Study);
app.get('/Home_Books/Lifestyle/Arts_Vehicle',all_productController.Arts_Vehicle);
app.get('/Home_Books/Lifestyle/Arts_Others',all_productController.Arts_Others);
app.get('/Home_Books/Lifestyle/Biographies',all_productController.Biographies);
app.get('/Home_Books/Lifestyle/Biographies_Arts',all_productController.Biographies_Arts);
app.get('/Home_Books/Lifestyle/Biographies_Ethnic',all_productController.Biographies_Ethnic);
app.get('/Home_Books/Lifestyle/Biographies_Leaders',all_productController.Biographies_Leaders);
app.get('/Home_Books/Lifestyle/Biographies_Memoirs',all_productController.Biographies_Memoirs);
app.get('/Home_Books/Lifestyle/Biographies_Professionals',all_productController.Biographies_Professionals);
app.get('/Home_Books/Lifestyle/Biographies_Sports',all_productController.Biographies_Sports);
app.get('/Home_Books/Lifestyle/Biographies_Travelers',all_productController.Biographies_Travelers);
app.get('/Home_Books/Lifestyle/Biographies_TrueCrime',all_productController.Biographies_TrueCrime);
app.get('/Home_Books/Lifestyle/Biographies_Others',all_productController.Biographies_Others);
app.get('/Home_Books/Lifestyle/Food',all_productController.Food);
app.get('/Home_Books/Lifestyle/Health',all_productController.Health);
app.get('/Home_Books/Lifestyle/LGBT',all_productController.LGBT);
app.get('/Home_Books/Lifestyle/Parenthood',all_productController.Parenthood);
app.get('/Home_Books/Lifestyle/Philosophy',all_productController.Philosophy);
app.get('/Home_Books/Lifestyle/Religion',all_productController.Religion);
app.get('/Home_Books/Lifestyle/Travel',all_productController.Travel);

app.get('/NotesPage',all_productController.N_NotesPage);
app.get('/Home_Notes/ArtsPage',all_productController.N_ArtsPage);
app.get('/Home_Notes/Arts/Arts',all_productController.N_Arts);
app.get('/Home_Notes/Arts/Humanities',all_productController.N_Humanities);
app.get('/Home_Notes/Arts/Law',all_productController.N_Law);
app.get('/Home_Notes/Arts/Property',all_productController.N_Property);
app.get('/Home_Notes/Arts/SocialSciences',all_productController.N_SocialSciences);
app.get('/Home_Notes/Arts/SocialWork',all_productController.N_SocialWork);
app.get('/Home_Notes/CommercePage',all_productController.N_CommercePage);
app.get('/Home_Notes/Commerce/Business',all_productController.N_Business);
app.get('/Home_Notes/Commerce/Commerce',all_productController.N_Commerce);
app.get('/Home_Notes/Commerce/Education',all_productController.N_Education);
app.get('/Home_Notes/Commerce/Professional',all_productController.N_Professional);
app.get('/Home_Notes/Commerce/Teaching',all_productController.N_Teaching);
app.get('/Home_Notes/MedicinePage',all_productController.N_MedicinePage);
app.get('/Home_Notes/Medicine/Dentistry',all_productController.N_Dentistry);
app.get('/Home_Notes/Medicine/Health',all_productController.N_Health);
app.get('/Home_Notes/Medicine/Medicine',all_productController.N_Medicine);
app.get('/Home_Notes/Medicine/Nursing',all_productController.N_Nursing);
app.get('/Home_Notes/Medicine/Pharmacy',all_productController.N_Pharmacy);
app.get('/Home_Notes/Medicine/Veterinary',all_productController.N_Veterinary);
app.get('/Home_Notes/SciencePage',all_productController.N_SciencePage);
app.get('/Home_Notes/Science/Agriculture',all_productController.N_Agriculture);
app.get('/Home_Notes/Science/Architecture',all_productController.N_Architecture);
app.get('/Home_Notes/Science/Communications',all_productController.N_Communications);
app.get('/Home_Notes/Science/Engineering',all_productController.N_Engineering);
app.get('/Home_Notes/Science/Information',all_productController.N_Information);
app.get('/Home_Notes/Science/Mathematics',all_productController.N_Mathematics);
app.get('/Home_Notes/Science/Science',all_productController.N_Science);
app.get('/Home_Notes/Science/Sports',all_productController.N_Sports);

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
app.post('/pushMail', adminDashboardController.sendEmailToUsers);


console.log('Server UP! Go 8080');
app.listen(8080);
