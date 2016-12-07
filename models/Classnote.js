//This Model interfaces with the table classnotes_records in the foodforsouldatabase
//maintaining the records of books and allowing user to add, modify , fetch classnotes_records
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initializing the ORM to connect to the database
var Sequelize = require('sequelize');
var sequelize = new Sequelize('foodforsoul1', 'root', 'root',{
  define: {
   timestamps: true // true by default
 }
});
//creating object of classnotes_records which will be used to map to database
var classnotesrecords = sequelize.define('classnotes_records', {
  classnotesId: {
      type: Sequelize.INTEGER,
      field: 'classnotesId',
      primaryKey: true
    },
  subject: {
    type: Sequelize.STRING,
    field: 'subject'
  },
  subcategory: {
    type: Sequelize.STRING,
    field: 'subcategory'
  },
  university:{
    type: Sequelize.STRING,
    field: 'university'
  },
  description:{
    type: Sequelize.STRING,
    field: 'description'
  },
  price:{
    type: Sequelize.INTEGER,
    field: 'price'
  },
  name:{
    type: Sequelize.STRING,
    field: 'name'
  },
  sellerID:{
    type: Sequelize.INTEGER,
    field: 'sellerID'
  },
  subcategory:{
    type: Sequelize.STRING,
    field: 'subcategory'
  }
});


//Added by Nikitha for Inventory Management to add new class notes records
exports.insertClassNotes = (req, res) => {

  sequelize.sync().then(function() {
    return classnotesrecords.create({
      name: req.session.classNotesName,
      subject:  req.session.classNotesSubject,
      description:req.session.classNotesDescription,
      university:req.session.classNotesUniversity,
      price:req.session.classNotesPrice,
      subcategory:req.session.subcategory,
      sellerID:req.session.sellerID
    });
  }).then(function () {

  res.sendFile(path.join(__dirname + '/../views'+'/InventoryClassNotesAddedConfirmPage.html'));
  });


};

exports.findClassNotesRecords = (req, res) => {
  //var x =req.session.bookId;
//  console.log(x);
    classnotesrecords.findById('201').then(function(result) {
      var x = {
    name:result.name,
    subject:result.subject,
  university:result.university,
  description:result.description,
  price:result.price
};

res.json(x);

  });
}

exports.updateClassNoteRecords = (req, res) => {
//var check =   JSON.parse(req.body);

  bookrecords.update({
    name: req.body.name,
    subject:req.body.subject,
    university:req.body.university,
    description:req.body.description,
    price:req.body.price,

  },
{
  where:
  {
    bookID : '201'
  }
}).then(function() {
//  res.sendStatus(200);
//  console.log('Trying to redirect');
 res.sendFile(path.join(__dirname + '/../views'+'/InventoryBookClassNotesModifiedPage.html'));
})
};



  exports.findAllClassNotesRecords = (req, res) =>
  {
    classnotesrecords.findAll(
    {
      where:
      {
        sellerID : req.session.sellerID
      }
    })
    .then(function(result)
    {
      var x  = result;
      //console.log(result.length);
       res.json(x);
     });

   };


   //Deleting a class notes record
   exports.deleteClassNotesForClassNotesId = (req, res) => {
   //var check =   JSON.parse(req.body);
   classnotesrecords.destroy({
     where: {
     //  author:req.params.author
     classnotesId : req.session.classnotesId
     }
   }).then(function(result) {

  res.sendStatus(200);
   });

    };


//module.exports=Book;

//Added by Snehil for Home Page to view Notes according to user requirement
//Pre-conditions   --> Takes filter and category inputs by the user on the home page
//Post-conditions  --> Returns the Class Notes according to user request

exports.notes_data = (req, res) => {

    if(req.body.pricemin == 'null')
        d_pricemin = 0;
    else
        d_pricemin = req.body.pricemin;
    if(req.body.pricemax == 'null')
        d_pricemax = 9999999;
    else
        d_pricemax = req.body.pricemax;
    if(req.body.search == 'null' || req.body.search.toLowerCase() == '%note%' || req.body.search.toLowerCase() == '%notes%')
        d_search = "%%";
    else
        d_search = req.body.search;
    //console.log("First Category"+req.body.notes_category1);
    //console.log("Second Category"+req.body.notes_category2);
    if(req.body.notes_category1 == 'null')
    {
        //console.log('Step 1');
        d_notes_category1 = ["NULL","Arts", "Commerce", "Medicine","Science"];
        d_notes_category2 = ["NULL","Arts", "Humanities", "Law", "Property", "SocialSciences", "SocialWork","Business", "Commerce", "Education", "Professional", "Teaching","Dentistry", "Health", "Medicine", "Nursing", "Pharmacy", "Veterinary","Agriculture", "Architecture", "Communications", "Engineering", "Information", "Mathematics", "Science", "Sports"];
    }
    else
    {
        //console.log('Step 2');
        d_notes_category1 = [req.body.notes_category1];
        if(req.body.notes_category1 == 'Arts')
        {
            if (req.body.notes_category2 == 'null')
                d_notes_category2 = ["NULL","Arts", "Humanities", "Law", "Property", "SocialSciences", "SocialWork"];
            else
                d_notes_category2 = [req.body.notes_category2];
        }
        else if(req.body.notes_category1 == 'Commerce')
        {
            if (req.body.notes_category2 == 'null')
                d_notes_category2 = ["NULL","Business", "Commerce", "Education", "Professional", "Teaching"];
            else
                d_notes_category2 = [req.body.notes_category2];
        }
        else if(req.body.notes_category1 == 'Medicine')
        {
            if (req.body.notes_category2 == 'null')
                d_notes_category2 = ["NULL","Dentistry", "Health", "Medicine", "Nursing", "Pharmacy", "Veterinary"];
            else
                d_notes_category2 = [req.body.notes_category2];
        }
        else if(req.body.notes_category1 == 'Science')
        {
            if (req.body.notes_category2 == 'null')
                d_notes_category2 = ["NULL","Agriculture", "Architecture", "Communications", "Engineering", "Information", "Mathematics", "Science", "Sports"];
            else
                d_notes_category2 = [req.body.notes_category2];
        }

    }

    if (req.body.tabDisplays == "tab-latest") {
        classnotesrecords.findAll({
            where: {
                price: {
                    $gte: d_pricemin,
                    $lte: d_pricemax
                },
                $and: {
                    $or: {
                        name: {
                            $like: d_search
                        },
                        university: {
                            $like: d_search
                        },
                        description: {
                            $like: d_search
                        },
                        subject: {
                            $like: d_search
                        },
                        subcategory: {
                            $like: d_search
                        }
                    },
                    subject: {
                        $in: d_notes_category1
                    },
                    subcategory: {
                        $in: d_notes_category2
                    }
                }
            },
            order: [['createdAt', 'DESC']]
        }).then(function (result) {
            //console.log(result);
            res.json(result);
        });
    }
    else if (req.body.tabDisplays == "tab-bestseller") {
        classnotesrecords.findAll({
            where: {
                price: {
                    $gte: d_pricemin,
                    $lte: d_pricemax
                },
                $and: {
                    $or: {
                        name: {
                            $like: d_search
                        },
                        university: {
                            $like: d_search
                        },
                        description: {
                            $like: d_search
                        },
                        subject: {
                            $like: d_search
                        },
                        subcategory: {
                            $like: d_search
                        }
                    },
                    subject: {
                        $in: d_notes_category1
                    },
                    subcategory: {
                        $in: d_notes_category2
                    }
                }
            }
        }).then(function (result) {
            //console.log(result);
            res.json(result);
        });
    }
    else if (req.body.tabDisplays == "tab-highestrated") {
        classnotesrecords.findAll({
            where: {
                price: {
                    $gte: d_pricemin,
                    $lte: d_pricemax
                },
                $and: {
                    $or: {
                        name: {
                            $like: d_search
                        },
                        university: {
                            $like: d_search
                        },
                        description: {
                            $like: d_search
                        },
                        subject: {
                            $like: d_search
                        },
                        subcategory: {
                            $like: d_search
                        }
                    },
                    subject: {
                        $in: d_notes_category1
                    },
                    subcategory: {
                        $in: d_notes_category2
                    }
                }
            }
        }).then(function (result) {
            //console.log(result);
            res.json(result);
        });
    }
    else if (req.body.tabDisplays == "tab-under10") {
        classnotesrecords.findAll({
            where: {
                price: {
                    $lte: 10
                },
                $and: {
                    $or: {
                        name: {
                            $like: d_search
                        },
                        university: {
                            $like: d_search
                        },
                        description: {
                            $like: d_search
                        },
                        subject: {
                            $like: d_search
                        },
                        subcategory: {
                            $like: d_search
                        }
                    },
                    subject: {
                        $in: d_notes_category1
                    },
                    subcategory: {
                        $in: d_notes_category2
                    }
                }
            },
        }).then(function (result) {
            //console.log(result);
            res.json(result);
        });
    }

}