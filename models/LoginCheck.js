//Author : Rerajitha mittai
var express = require('express');
var app = express();
var path = require('path');
var bcrypt = require('bcryptjs');


var Sequelize = require('sequelize');
var bcrypt = require('bcryptjs');
var sequelize = new Sequelize('foodforsoul', 'root', 'root',{
  define: {
   timestamps: false // true by default
 }
});


var loginDetails = sequelize.define('login_details', {
   login_id: {
      type: Sequelize.STRING,
      field: 'login_id',
      primaryKey: true
    },
	password: {
      type: Sequelize.STRING,
      field: 'password'
    },
    role: {
        type: Sequelize.STRING,
        field: 'role'
      }
});

//this method does all the login validation for any user type(seller,buyer,admin)
exports.login = (req, res) => {
    var x =req.body.emailID;
    //console.log(x);
    loginDetails.findById(req.body.emailID).then(function(result) {
      //console.log(result);
      if(!result) {
				//console.log('user not found');
        res.send('notpresent');
        //res.sendFile(path.join(__dirname + '/../views'+'/login.html'));
		}
   else {
     //console.log('user found');
      var hash = result.password;
      if (bcrypt.compareSync(req.body.password, hash)) {
      //console.log("PASSWORDS MATCH");
  //    req.session.emailID = req.body.emailID;



      console.log('body email:::'+req.body.emailID);
      console.log('session email'+req.session.emailID);



      if(result.role == "buyer"){
      req.session.isUserLoggedIn= 'true';
      //console.log(result.role+'sdsds');
      //res.sendFile(path.join(__dirname + '/../views'+'/SellerDashboard.html'));
      console.log('User session -----------------------'+req.session.isUserLoggedIn);
      res.send('buyer');
    }
    else if(result.role == "seller"){
      //console.log(result.role);
      req.session.isUserLoggedIn= 'true';
      //res.sendFile(path.join(__dirname + '/../views'+'/SellerDashboard.html'));
      res.send('seller');
    }
    }
    else if(result.role == "admin"){
      req.session.isUserLoggedIn= 'true';
      //res.sendFile(path.join(__dirname + '/../views'+'/SellerDashboard.html'));
      res.send('admin');
    }
    else {
      //console.log("PASSWORDS NOT MATCH");
      res.send('passwordincorrect')
      //res.sendFile(path.join(__dirname + '/../views'+'/login.html'));
    }

		}
}
)};
