var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var Sequelize = require('sequelize');
var sequelize = new Sequelize('foodforsoul', 'root', 'root',{
  define: {
   timestamps: true
 }
});

var bookrecords = sequelize.define('book_records', {
  bookId: {
      type: Sequelize.INTEGER,
      field: 'bookID',
      primaryKey: true
    },
  bookName: {
      type: Sequelize.STRING,
      field: 'bookName'
    },
    author:{
      type: Sequelize.STRING,
      field: 'author'
    },
    isbn:{
      type: Sequelize.STRING,
      field: 'isbn'
    },
    price:{
      type: Sequelize.INTEGER,
      field: 'price'
    },
    quantity:{
      type: Sequelize.INTEGER,
      field: 'quantity'
    },
    source: {
        type: Sequelize.STRING,
        field: 'source'
    },
    discountApplicable:{
      type: Sequelize.STRING,
      field: 'discountApplicable'
    },
    discountRate:{
      type: Sequelize.INTEGER,
      field: 'discountRate'
    },
    couponCode:{
      type: Sequelize.STRING,
      field: 'couponCode'
    },
    description:{
        type: Sequelize.STRING,
        field: 'description'
    },
    sellerID:{
      type: Sequelize.STRING,
      field: 'sellerID'
    },
    category:{
      type: Sequelize.STRING,
      field: 'category'
    },
    category1:{
        type: Sequelize.STRING,
        field: 'category1'
    },
    category2:{
        type: Sequelize.STRING,
        field: 'category2'
    },
    language:{
        type: Sequelize.STRING,
        field: 'language'
    },
    format:{
        type: Sequelize.STRING,
        field: 'format'
    },
    condition:{
        type: Sequelize.STRING,
        field: 'condition'
    },
    rating:{
        type: Sequelize.INTEGER,
        field: 'rating'
    },
    bookSoldCount:{
        type: Sequelize.INTEGER,
        field: 'bookSoldCount'
    }
});

exports.insertBookRecords = (req, res) => {
  console.log(''+req.body.name);
  console.log(''+req.body.discountEndDate);
  console.log(''+req.body.discountApplicable1);
  sequelize.sync({
    force: true
  }).then(function() {
    return bookrecords.create({
      bookName: req.body.name,
      author: req.body.author,
      description:req.body.description,
      quantity:req.body.quantity,
      isbn:req.body.isbn,
      price:req.body.price,
      category:req.body.category,
      discountApplicable:req.body.discountApplicable,
      discountRate:req.body.discountRate,
      couponCode:req.body.couponCode,
      sellerID:req.session.sellerID

    });
  }).then(function () {
  res.sendStatus(200);
  //  console.log('Created');
    //res.status(200);
  //res.sendFile(path.join(__dirname + '/../views'+'/InventoryBookAddedConfirmPage.html'));
  });


};

exports.findBookRecords = (req, res) => {
  //var x =req.session.bookId;
//  console.log(x);
    bookrecords.findById(req.session.bookId).then(function(result) {
      var x = {
    name:result.bookName,
    author:result.author,
  description:result.description,
  quantity:result.quantity,
  category:result.category,
  isbn:result.isbn,
  price:result.price,
  discountApplicable:result.discountApplicable,
  discountRate:result.discountRate,
  couponCode:result.couponCode
};
  //  res.send(result.bookName);
//console.log(x);
 //app.use(express.static(__dirname+'/../'));
res.json(x);
//res.sendFile(path.join(__dirname + '/../views'+'/InventoryBookAddedConfirmPage.html'),x);
  });
}

exports.updateBookRecords = (req, res) => {
//var check =   JSON.parse(req.body);

  bookrecords.update({
    bookName: req.body.name,
    author: req.body.author,
    description:req.body.description,
    category:req.body.category,
    quantity:req.body.quantity,
    isbn:req.body.isbn,
    price:req.body.price,
    discountApplicable:req.body.discountApplicable,
    discountRate:req.body.discountRate,
    couponCode:req.body.couponCode
  },
{
  where:
  {
    bookID : req.session.bookId
  }
}).then(function() {
//  res.sendStatus(200);
//  console.log('Trying to redirect');
 res.sendFile(path.join(__dirname + '/../views'+'/InventoryBookModifiedConfirmPage.html'));
})
};

exports.findAllBookRecords = (req, res) => {
//var check =   JSON.parse(req.body);
bookrecords.findAll({
  where: {
  //  author:req.params.author
  sellerID : '17'
  }
}).then(function(result) {

  var x  = result;
  console.log(result.length);


   res.json(x);
});

 };


 //Deleting a book record
 exports.deleteBookForBookId = (req, res) => {
 //var check =   JSON.parse(req.body);
 bookrecords.destroy({
   where: {
   //  author:req.params.author
   bookId : req.session.bookId
   }
 }).then(function(result) {

res.sendStatus(200);
 });

  };

  exports.findNewProducts = (req, res) => {
  bookrecords.findAll(
    {
      where:
      {
        createdAt:
         {
           $gt: new Date(new Date() - 24 * 60 * 60 * 1000)
         }
      }
    })
    .then(function(result)
    {
      var x  =result;
      res.json(x);
    });
  };

  exports.findNewOffers = (req, res) => {
  bookrecords.findAll(
    {
      where:
      {
        discountRate:
         {
           $gte: 30
         }
      }
    })
    .then(function(result)
    {
      var x  =result;
      res.json(x);
    });
  };

//module.exports=Book;

// SNEHIL

exports.books_data = (req, res) => {
    //console.log("Check "+req.body.tabDisplays);

    if(req.body.format == 'null')
        d_format = ["Paperback","Hardcover","Kindle Edition","Large Print","Audible Audio Edition","Printed Access Code","Digital Access Code","Loose Leaf","Audio CD","Board Book"];
    else
        d_format = [req.body.format];
    if(req.body.language == 'null')
        d_language = ["English","German","French","Spanish","Italian","Arabic","Urdu","Russian","Hindi","Japanese"];
    else
        d_language = [req.body.language];
    if(req.body.condition == 'null')
        d_condition = ["New","Used","Collectible"];
    else
        d_condition = [req.body.condition];
    if(req.body.pricemin == 'null')
        d_pricemin = 0;
    else
        d_pricemin = req.body.pricemin;
    if(req.body.pricemax == 'null')
        d_pricemax = 9999999;
    else
        d_pricemax = req.body.pricemax;
    if(req.body.rating == 'null')
        d_rating = 0;
    else
        d_rating = req.body.rating;
    if(req.body.search == 'null' || req.body.search.toLowerCase() == '%book%' || req.body.search.toLowerCase() == '%books%')
        d_search = "%%";
    else
        d_search = req.body.search;
    if(req.body.books_category1 == 'null')
    {
        d_books_category1 = ["NULL","GoodReads", "Knowledge", "Lifestyle"];
        d_books_category2 = ["NULL","Children", "Comics", "Humor", "Mystery", "Romance", "ScienceFiction", "Teen", "Business", "Computers", "Education", "History", "Law", "Literature", "Medical", "Politics", "Reference", "Sciences", "Sports", "Arts", "Biographies", "Food", "Health", "LGBT", "Parenthood", "Philosophy", "Religion", "Travel"];
    }
    else
    {
        d_books_category1 = [req.body.books_category1];
        if(req.body.books_category1 == 'GoodReads')
        {
            if (req.body.books_category2 == 'null')
                d_books_category2 = ["NULL","Children", "Comics", "Humor", "Mystery", "Romance", "ScienceFiction", "Teen"];
            else
                d_books_category2 = [req.body.books_category2];
        }
        else if(req.body.books_category1 == 'Knowledge')
        {
            if (req.body.books_category2 == 'null')
                d_books_category2 = ["NULL","Business", "Computers", "Education", "History", "Law", "Literature", "Medical", "Politics", "Reference", "Sciences", "Sports"];
            else
                d_books_category2 = [req.body.books_category2];
        }
        else if(req.body.books_category1 == 'Lifestyle')
        {
            if (req.body.books_category2 == 'null')
                d_books_category2 = ["NULL","Arts", "Biographies", "Food", "Health", "LGBT", "Parenthood", "Philosophy", "Religion", "Travel"];
            else
                d_books_category2 = [req.body.books_category2];
        }

    }

    //console.log(d_format);
    //console.log(d_language);
    //console.log(d_condition);
    //console.log(d_pricemin);
    //console.log(d_pricemax);
    //console.log(d_rating);

    if (req.body.tabDisplays == "tab-latest") {
        bookrecords.findAll({
            where: {
                format: {
                    $in: d_format
                },
                language: {
                    $in: d_language
                },
                condition: {
                    $in: d_condition
                },
                rating: {
                    $gte: d_rating
                },
                price: {
                    $gte: d_pricemin,
                    $lte: d_pricemax
                },
                $and: {
                    $or: {
                        bookName: {
                            $like: d_search
                        },
                        author: {
                            $like: d_search
                        },
                        description: {
                            $like: d_search
                        },
                        category: {
                            $like: d_search
                        },
                        category1: {
                            $like: d_search
                        },
                        category2: {
                            $like: d_search
                        },
                        format: {
                            $like: d_search
                        },
                        language: {
                            $like: d_search
                        },
                        condition: {
                            $like: d_search
                        }
                    },
                    category: {
                        $in: d_books_category1
                    },
                    category1: {
                        $in: d_books_category2
                    }
                }
            },
            orderBy: [['createdAt', 'DESC']]
        }).then(function (result) {
            //console.log(result);
            res.json(result);
        });
    }
    else if (req.body.tabDisplays == "tab-bestseller") {
        bookrecords.findAll({
            where: {
                format: {
                    $in: d_format
                },
                language: {
                    $in: d_language
                },
                condition: {
                    $in: d_condition
                },
                rating: {
                    $gte: d_rating
                },
                price: {
                    $gte: d_pricemin,
                    $lte: d_pricemax
                },
                $and: {
                    $or: {
                        bookName: {
                            $like: d_search
                        },
                        author: {
                            $like: d_search
                        },
                        description: {
                            $like: d_search
                        },
                        category: {
                            $like: d_search
                        },
                        category1: {
                            $like: d_search
                        },
                        category2: {
                            $like: d_search
                        },
                        format: {
                            $like: d_search
                        },
                        language: {
                            $like: d_search
                        },
                        condition: {
                            $like: d_search
                        }
                    },
                    category: {
                        $in: d_books_category1
                    },
                    category1: {
                        $in: d_books_category2
                    }
                }
            },
            orderBy: [['bookSoldCount', 'DESC']]
        }).then(function (result) {
            //console.log(result);
            res.json(result);
        });
    }
    else if (req.body.tabDisplays == "tab-highestrated") {
        bookrecords.findAll({
            where: {
                format: {
                    $in: d_format
                },
                language: {
                    $in: d_language
                },
                condition: {
                    $in: d_condition
                },
                rating: {
                    $gte: d_rating
                },
                price: {
                    $gte: d_pricemin,
                    $lte: d_pricemax
                },
                $and: {
                    $or: {
                        bookName: {
                            $like: d_search
                        },
                        author: {
                            $like: d_search
                        },
                        description: {
                            $like: d_search
                        },
                        category: {
                            $like: d_search
                        },
                        category1: {
                            $like: d_search
                        },
                        category2: {
                            $like: d_search
                        },
                        format: {
                            $like: d_search
                        },
                        language: {
                            $like: d_search
                        },
                        condition: {
                            $like: d_search
                        }
                    },
                    category: {
                        $in: d_books_category1
                    },
                    category1: {
                        $in: d_books_category2
                    }
                }
            },
            orderBy: [['rating', 'DESC']]
        }).then(function (result) {
            //console.log(result);
            res.json(result);
        });
    }
    else if (req.body.tabDisplays == "tab-under10") {
        bookrecords.findAll({
            where: {
                format: {
                    $in: d_format
                },
                language: {
                    $in: d_language
                },
                condition: {
                    $in: d_condition
                },
                rating: {
                    $gte: d_rating
                },
                price: {
                    $lte: 10
                },
                $and: {
                    $or: {
                        bookName: {
                            $like: d_search
                        },
                        author: {
                            $like: d_search
                        },
                        description: {
                            $like: d_search
                        },
                        category: {
                            $like: d_search
                        },
                        category1: {
                            $like: d_search
                        },
                        category2: {
                            $like: d_search
                        },
                        format: {
                            $like: d_search
                        },
                        language: {
                            $like: d_search
                        },
                        condition: {
                            $like: d_search
                        }
                    },
                    category: {
                        $in: d_books_category1
                    },
                    category1: {
                        $in: d_books_category2
                    }
                }
            },
        }).then(function (result) {
            //console.log(result);
            res.json(result);
        });
    }
}
