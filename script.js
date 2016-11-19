var express = require('express');
var mysql = require('mysql');
var app = express();



var connection = mysql.createConnnection({
//properties
  host: 'locathost',
  user: 'root',a
  database: 'sampleDB'
});


connection.connect(function(error){
  if (!!error) {
    console.log('DB Connection Failed');
  }else{
    console.log('DB Connected');
  }
});

app.get('/', function(req,resp){
  //about mysql
  connection.query("SELECT * FROM sampleDB", function(error,rows,fields){
    if(!!error){
      console.log('Error in the query');
    }else{
      console.log('Query Executed');
      //parse with your rows/fields
    }
    });
});

app.listen(1337);
