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
var mysql = require('mysql')

var connection = mysql.createConnection
({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'foodforsoul'
})

connection.connect(function(err)
{
  if (err) throw err
  console.log('You are now connected...')
})


//Variable declarations to access Controller files
var returnController= require('./controllers/ReturnAndCancel');
var inventoryManagementController= require('./controllers/InventoryManagement');
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
  )
);


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


//call to page to fetch books in inventory of the seller
app.get('/managebooks', function(req, res) {
                        req.session.emailID=  'nikithauc@gmail.com';
 req.session.sellerID=  req.session.emailID;
//  req.session.sdOrderId='51';

    res.sendFile(path.join(__dirname + '/views/ManageBooks.html'));

});


// call to page to enter new book records

app.get('/addbookpage', inventoryManagementController.getAddBookPage);
app.get('/Register', loginController.register);
app.get('/RegisterSeller', loginController.registerSeller);
app.get('/ForgotPassword', loginController.forgotPassword);
app.get('/login',homeController.login);

app.post('/ReturnOrderConfirmPage', returnController.confirmReturnOrder);
app.post('/CancelOrderConfirmPage', returnController.confirmReturnOrder);

app.post('/Registersuccessbuyer', registerBuyerController.confirmRegistrationbuyer);
app.post('/Registersuccessseller', registerSellerController.confirmRegistration);
app.post('/Forgotpassword', resetPassword.confirmPasswordreset);
app.post('/Deletecartitem', deleteCartItem.confirmDelete);
app.post('/Checkout', confirmCheckout.checkoutConfirm);



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


console.log('Server UP! Go 8080');
app.listen(8080);

app.get('/faq', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/FFSFaq.html'));
    //req.session.checkingSomethin="this is the session data";

});
