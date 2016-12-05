var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var Sequelize = require('sequelize');
var sequelize = new Sequelize('foodforsoul', 'root', 'root',{
  define: {
   timestamps: true // true by default
 }
});

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
    subcategory: {
        type: Sequelize.INTEGER,
        field: 'subcategory'
    },
    sellerId: {
        type: Sequelize.INTEGER,
        field: 'sellerId'

    }
});



exports.insertClassNotes = (req, res) => {

  sequelize.sync().then(function() {
    return classnotesrecords.create({
      name: req.session.classNotesName,
      subject:  req.session.classNotesSubject,
      description:req.session.classNotesDescription,
      university:req.session.classNotesUniversity,
      price:req.session.classNotesPrice
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
        sellerID : '17'
      }
    })
    .then(function(result)
    {
      var x  = result;
      console.log(result.length);
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

// SNEHIL

exports.notes_data = (req, res) => {
    //console.log("Check "+req.body.tabDisplays);

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
    console.log("First Category"+req.body.notes_category1);
    console.log("Second Category"+req.body.notes_category2);
    if(req.body.notes_category1 == 'null')
    {
        console.log('Step 1');
        d_notes_category1 = ["NULL","Arts", "Commerce", "Medicine","Science"];
        d_notes_category2 = ["NULL","Arts", "Humanities", "Law", "Property", "SocialSciences", "SocialWork","Business", "Commerce", "Education", "Professional", "Teaching","Dentistry", "Health", "Medicine", "Nursing", "Pharmacy", "Veterinary","Agriculture", "Architecture", "Communications", "Engineering", "Information", "Mathematics", "Science", "Sports"];
    }
    else
    {
        console.log('Step 2');
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

    //console.log(d_format);
    //console.log(d_language);
    //console.log(d_condition);
    //console.log(d_pricemin);
    //console.log(d_pricemax);
    //console.log(d_rating);

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
            orderBy: [['createdAt', 'DESC']]
        }).then(function (result) {
            console.log(result);
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
            console.log(result);
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
            console.log(result);
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
            console.log(result);
            res.json(result);
        });
    }

}