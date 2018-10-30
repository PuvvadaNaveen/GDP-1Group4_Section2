const express = require('express')
const api = express.Router()
const Model = require('../models/form')
const Model1 = require('../models/employeeOption')
const Model2 = require('../models/colorOption')
const Model3 = require('../models/clothOptions')
const Model4 = require('../models/shoplist')
const mongoose = require('mongoose')
const indexPage = require('../routes/index')
const db = mongoose.connection;
var ObjectId = require('mongodb').ObjectID;

let emptyModel = [
    {
        performerId: "",
        perfId: "",
        headcicumference: "",
        neck: "",
        armcycle: "",
        centrebacktowrist: "",
        chestrelaxed: "",
        chestexpanded: "",
        chestovercompressiongarnment: "",
        chestoverbodypadding: "",
        waistrelaxed: "",
        waistexpande: "",
        fullhip: "",
        halfgirth: "",
        fullgirth: "",
        inseamtoankle: "",
        inseamtofloor: "",
        waistovercompressiongarnment: "",
        hipovercompressiongarnment: "",
        waistoverbodypadding: "",
        hipoverbodypadding: "",
        shoes: "",
        dominanthand: "",
        otheroverbodypadding: "",
    }
]

let emptyCloth = [
    {
        clothselect: ""
    }
]
let emptyItem = [
    {
        itemId: ""
    }
]
 let emptyEmployee = [
     {
        employeeId: ""
     }
 ]

let emptyShoplist = [
    {
        shopID: ""
    },
    {
        duedate: "mm-dd-yyyy"
    }
]

api.post('/save', function (req, res) {
    var firstname = req.body.firstname.charAt(0).toUpperCase()+req.body.firstname.slice(1).toLowerCase();
    var lastname = req.body.lastname.charAt(0).toUpperCase()+req.body.lastname.slice(1).toLowerCase();
    var playname = req.body.playname.charAt(0).toUpperCase()+req.body.playname.slice(1).toLowerCase();
    var playdate = req.body.playdate;
    var charactername = req.body.charactername.charAt(0).toUpperCase()+req.body.charactername.slice(1).toLowerCase();req.body.playname;;
    var phonenumber = req.body.phonenumber;
    var textchoice = req.body.textchoice;
    var email = req.body.email1;
    var agreement = req.body.agreement;
    var dominanthand = req.body.dominanthand;
    var height = req.body.heught;
    var estimatedweight = req.body.estimatedweight;
    var eyewearchoice = req.body.eyewearchoice;
    var hair = req.body.hair;
    var facialhai = req.body.facialhai;
    var earschoice = req.body.earschoice;
    var otherpiercings = req.body.otherpiercings;
    var tattoos = req.body.tattoos;
    var tattooagreement = req.body.tattooagreement;
    var comments = req.body.comments;
    var shoes = req.body.shoes;
    var danceshoes = req.body.danceshoes;
    var shirtsize = req.body.shirtsize;
    var pants = req.body.pants;
    var brasize = req.body.brasize;
    var ring = req.body.ring;
    var allergy = req.body.allergy;
    var other = req.body.other;
    var allergies = req.body.allergies;


    var newForm = new Model({
        firstname: firstname,
        lastname: lastname,
        playname: playname,
        playdate: playdate,
        charactername: charactername,
        phonenumber: phonenumber,
        textchoice: textchoice,
        email: email,
        agreement: agreement,
        dominanthand: dominanthand,
        height: height,
        estimatedweight: estimatedweight,
        eyewearchoice: eyewearchoice,
        hair: hair,
        facialhai: facialhai,
        earschoice: earschoice,
        otherpiercings: otherpiercings,
        tattoos: tattoos,
        tattooagreement: tattooagreement,
        comments: comments,
        shoes: shoes,
        danceshoes: danceshoes,
        shirtsize: shirtsize,
        pants: pants,
        brasize: brasize,
        ring: ring,
        allergy: allergy,
        other: other,
        allergies: allergies

    });
    db.collection('forms').save(newForm, (err, result) => {
        if (err) return console.log('error')
        console.log("saved");
        return res.redirect('/basic')
    })
    // Model.create(newForm, function (err, form) {
    //     if (err) throw err;
    //     console.log(form);
    // });  
})
api.post('/edit', function (req, res) {
    var query = { "_id": ObjectId(req.body.perfId1) };
    db.collection('forms').find(query).toArray(function (err, result) {
        if (err) throw err;
        res.render('form.ejs', { perf: result });
        // res.redirect('Homepage.ejs',{listOfPerformers : result});
    });
})
api.post('/delete', function (req, res) {
    var query = { "_id": ObjectId(req.body.perfId2) };
    db.collection('forms').deleteOne(query, function (err, result) {
        if (err) throw err;
        return res.redirect('/')
        // res.render('form.ejs', { perf : result});
        // res.redirect('Homepage.ejs',{listOfPerformers : result});

    });
})
api.post('/sort', function (req, res) {
    var sortby;
    console.log("console.log(req.body.lastname);");
    console.log(req.body.lastname);
    console.log(req.body.firstname);
    if(req.body.firstname !=null && req.body.firstname!=""){
        sortby = req.body.firstname;
    }
    else if(req.body.lastname != null && req.body.lastname!=""){
        sortby = req.body.lastname;
    }
    console.log(sortby);
    var str = encodeURIComponent(sortby);
        res.redirect('/?valid=' + str);
});
// commented by shiva
//   api.get('/getinfo',  function (req, res) {
//      Model.find({}, function (err, form) {
//          if (err) throw err;
//          console.log(form);
//          return res.json(form);
//      });
//     //  return res.redirect('/basic')
//    })
// commented by shiva
// api.get('/getinfo',  function (req, res) {
//     var firstname = req.body.firstname;
//     var mysort = { firstname : 1 };
//     db.collection('forms').find().sort(mysort).toArray(function(err, result){
//         if (err) throw err;
//         //   console.log(result);
//           return res.json(result);
//     });
//    //  return res.redirect('/basic')
//   })

api.post('/getByName', function (req, res) {
    var query = { firstname: req.body.firstname };

    db.collection('forms').find(query).toArray(function (err, result) {
        if (err) throw err;

        db.collection('measures').find().toArray(function (err, result1) {
            if (err) throw err;
            if (result1.length == 0) {
                result1 = emptyModel;
            }
            db.collection('clothoptions').find().toArray(function (err, result2) {
                if (err) throw err;
                if (result2.length == 0) {
                    result2 = emptyCloth;
                }
                db.collection('coloroptions').find().toArray(function (err, result3) {
                    if (err) throw err;
                    if (result3.length == 0) {
                        result3 = emptyItem;
                    }
                    db.collection('employeeoptions').find().toArray(function (err, result4) {
                        if (err) throw err;
                        if (result4.length == 0) {
                            result4 = emptyEmployee;
                        }
                        res.render('Homepage.ejs', { listOfPerformers: result, measures: result1, Measurements: emptyModel, cloth: result2, cloth1: emptyCloth, item1: emptyItem, item: result3, empl:result4, empl1: emptyEmployee });
                    })
                })
            });
        });
    });
})
// get by play name
api.post('/getByPlay', function (req, res) {
    console.log(req.body.playname);
    var query = { playname: req.body.playname };

    db.collection('forms').find(query).toArray(function (err, result) {
        if (err) throw err;

        db.collection('measures').find().toArray(function (err, result1) {
            if (err) throw err;
            if (result1.length == 0) {
                result1 = emptyModel;
            }
            db.collection('clothoptions').find().toArray(function (err, result2) {
                if (err) throw err;
                if (result2.length == 0) {
                    result2 = emptyCloth;
                }
                db.collection('coloroptions').find().toArray(function (err, result3) {
                    if (err) throw err;
                    if (result3.length == 0) {
                        result3 = emptyItem;
                    }
                    db.collection('employeeoptions').find().toArray(function (err, result4) {
                        if (err) throw err;
                        if (result4.length == 0) {
                            result4 = emptyEmployee;
                        }
                        res.render('Homepage.ejs', { listOfPerformers: result, measures: result1, Measurements: emptyModel, cloth: result2, cloth1: emptyCloth, item1: emptyItem, item: result3, empl:result4, empl1: emptyEmployee });
                    })
                })
            });
        });
    });
})
//get by play date
//   api.post('/getByDate',  function (req, res) {
//     console.log(req.body.playdate);
//  var query = {playdate : {"$gte" : new Date(req.body.playdate)}};
// //   query = {playdate:"/"+new Date(req.body.playdate)+"/"};
// //  query = {playdate: /2018-09-15/};
// //  query = {playdate: {$in:[new Date(req.body.playdate)]}};
//  console.log(query);

//  db.collection('forms').find(query, function(err, result){
//      if (err) throw err;
//    //   console.log(result);
//      return res.json(result);
//  });
// })
api.post('/getByDate', function (req, res) {
    var query = { playdate: req.body.playdate };
    //  var query = {playdate : {"$gte" : new Date(req.body.playdate)}};
    //   query = {playdate:"/"+req.body.playdate+"/"};
    //  query = {playdate: /^"2018-09-15"/};
    //   query = {playdate: {"$in":[new Date(req.body.playdate)]}};

    db.collection('forms').find(query).toArray(function (err, result) {
        if (err) throw err;

        db.collection('measures').find().toArray(function (err, result1) {
            if (err) throw err;
            if (result1.length == 0) {
                result1 = emptyModel;
            }
            db.collection('clothoptions').find().toArray(function (err, result2) {
                if (err) throw err;
                if (result2.length == 0) {
                    result2 = emptyCloth;
                }
                db.collection('coloroptions').find().toArray(function (err, result3) {
                    if (err) throw err;
                    if (result3.length == 0) {
                        result3 = emptyItem;
                    }
                    db.collection('employeeoptions').find().toArray(function (err, result4) {
                        if (err) throw err;
                        if (result4.length == 0) {
                            result4 = emptyEmployee;
                        }
                        res.render('Homepage.ejs', { listOfPerformers: result, measures: result1, Measurements: emptyModel, cloth: result2, cloth1: emptyCloth, item1: emptyItem, item: result3, empl:result4, empl1: emptyEmployee });
                    })
                })
            });
        });
    });
})

api.post('/emp01', function (req, res) {
    if ((req.body.employeeId).length > 0) {
        db.collection('employeeoptions').update({ 'empID': req.body.empID }, { $set: { 'selectEmployee1': req.body.selectEmployee1 } });
        console.log(req.body.selectEmployee1);
    }else{
    var selectEmployee1 = req.body.selectEmployee1;
    var empID = req.body.empID;

    var newEmployeeOption = new Model1({

        selectEmployee1: selectEmployee1,
        empID: empID


    });

    Model1.create(newEmployeeOption, function (err, employeeOption) {
        if (err) throw err;
    });
    db.collection('forms').find().toArray(function (err, result) {
        if (err) throw err;

        db.collection('measures').find().toArray(function (err, result1) {
            if (err) throw err;
            if (result1.length == 0) {
                result1 = emptyModel;
            }
            db.collection('clothoptions').find().toArray(function (err, result2) {
                if (err) throw err;
                if (result2.length == 0) {
                    result2 = emptyCloth;
                }
                db.collection('coloroptions').find().toArray(function (err, result3) {
                    if (err) throw err;
                    if (result3.length == 0) {
                        result3 = emptyItem;
                    }
                    db.collection('employeeoptions').find().toArray(function (err, result4) {
                        if (err) throw err;
                        if (result4.length == 0) {
                            result4 = emptyEmployee;
                        }
                        res.render('Homepage.ejs', { listOfPerformers: result, measures: result1, Measurements: emptyModel, cloth: result2, cloth1: emptyCloth, item1: emptyItem, item: result3, empl:result4, empl1: emptyEmployee });
                    })
                })
            });
        });
    });
}
db.collection('forms').find().toArray(function (err, result) {
    if (err) throw err;

    db.collection('measures').find().toArray(function (err, result1) {
        if (err) throw err;
        if (result1.length == 0) {
            result1 = emptyModel;
        }
        db.collection('clothoptions').find().toArray(function (err, result2) {
            if (err) throw err;
            if (result2.length == 0) {
                result2 = emptyCloth;
            }
            db.collection('coloroptions').find().toArray(function (err, result3) {
                if (err) throw err;
                if (result3.length == 0) {
                    result3 = emptyItem;
                }
                db.collection('employeeoptions').find().toArray(function (err, result4) {
                    if (err) throw err;
                    if (result4.length == 0) {
                        result4 = emptyEmployee;
                    }
                    res.render('Homepage.ejs', { listOfPerformers: result, measures: result1, Measurements: emptyModel, cloth: result2, cloth1: emptyCloth, item1: emptyItem, item: result3, empl:result4, empl1: emptyEmployee });
                })
            })
        });
    });
});
})

api.post('/clr01', function (req, res) {
    if ((req.body.itemId).length > 0) {
        db.collection('coloroptions').update({ 'colorID': req.body.colorID }, { $set: { 'selectColor01': req.body.selectColor01 } });
        console.log(req.body.colorID);
    } else {
        var selectColor01 = req.body.selectColor01;
        var colorID = req.body.colorID;

        var newColorOption = new Model2({

            selectColor01: selectColor01,
            colorID: colorID


        });

        Model2.create(newColorOption, function (err, ColorOption) {
            if (err) throw err;
        });
        db.collection('forms').find().toArray(function (err, result) {
            if (err) throw err;
    
            db.collection('measures').find().toArray(function (err, result1) {
                if (err) throw err;
                if (result1.length == 0) {
                    result1 = emptyModel;
                }
                db.collection('clothoptions').find().toArray(function (err, result2) {
                    if (err) throw err;
                    if (result2.length == 0) {
                        result2 = emptyCloth;
                    }
                    db.collection('coloroptions').find().toArray(function (err, result3) {
                        if (err) throw err;
                        if (result3.length == 0) {
                            result3 = emptyItem;
                        }
                        db.collection('employeeoptions').find().toArray(function (err, result4) {
                            if (err) throw err;
                            if (result4.length == 0) {
                                result4 = emptyEmployee;
                            }
                            res.render('Homepage.ejs', { listOfPerformers: result, measures: result1, Measurements: emptyModel, cloth: result2, cloth1: emptyCloth, item1: emptyItem, item: result3, empl:result4, empl1: emptyEmployee });
                        })
                    })
                });
            });
        });
    }
    db.collection('forms').find().toArray(function (err, result) {
        if (err) throw err;

        db.collection('measures').find().toArray(function (err, result1) {
            if (err) throw err;
            if (result1.length == 0) {
                result1 = emptyModel;
            }
            db.collection('clothoptions').find().toArray(function (err, result2) {
                if (err) throw err;
                if (result2.length == 0) {
                    result2 = emptyCloth;
                }
                db.collection('coloroptions').find().toArray(function (err, result3) {
                    if (err) throw err;
                    if (result3.length == 0) {
                        result3 = emptyItem;
                    }
                    db.collection('employeeoptions').find().toArray(function (err, result4) {
                        if (err) throw err;
                        if (result4.length == 0) {
                            result4 = emptyEmployee;
                        }
                        res.render('Homepage.ejs', { listOfPerformers: result, measures: result1, Measurements: emptyModel, cloth: result2, cloth1: emptyCloth, item1: emptyItem, item: result3, empl:result4, empl1: emptyEmployee });
                    })
                })
            });
        });
    });
})


api.post('/cloth01', function (req, res) {
    if ((req.body.clothselect).length > 0) {
        db.collection('clothoptions').update({ 'clothID': req.body.clothID }, { $set: { 'selectCloth': req.body.selectCloth } });

    } else {
        var selectCloth = req.body.selectCloth;
        var clothID = req.body.clothID;
        var clothselect = req.body.clothselect;

        var newClothOption = new Model3({

            selectCloth: selectCloth,
            clothID: clothID


        });

        Model3.create(newClothOption, function (err, ClothOption) {
            if (err) throw err;
        });
        db.collection('forms').find().toArray(function (err, result) {
            if (err) throw err;
    
            db.collection('measures').find().toArray(function (err, result1) {
                if (err) throw err;
                if (result1.length == 0) {
                    result1 = emptyModel;
                }
                db.collection('clothoptions').find().toArray(function (err, result2) {
                    if (err) throw err;
                    if (result2.length == 0) {
                        result2 = emptyCloth;
                    }
                    db.collection('coloroptions').find().toArray(function (err, result3) {
                        if (err) throw err;
                        if (result3.length == 0) {
                            result3 = emptyItem;
                        }
                        db.collection('employeeoptions').find().toArray(function (err, result4) {
                            if (err) throw err;
                            if (result4.length == 0) {
                                result4 = emptyEmployee;
                            }
                            res.render('Homepage.ejs', { listOfPerformers: result, measures: result1, Measurements: emptyModel, cloth: result2, cloth1: emptyCloth, item1: emptyItem, item: result3, empl:result4, empl1: emptyEmployee });
                        })
                    })
                });
            });
        });
    }

    db.collection('forms').find().toArray(function (err, result) {
        if (err) throw err;

        db.collection('measures').find().toArray(function (err, result1) {
            if (err) throw err;
            if (result1.length == 0) {
                result1 = emptyModel;
            }
            db.collection('clothoptions').find().toArray(function (err, result2) {
                if (err) throw err;
                if (result2.length == 0) {
                    result2 = emptyCloth;
                }
                db.collection('coloroptions').find().toArray(function (err, result3) {
                    if (err) throw err;
                    if (result3.length == 0) {
                        result3 = emptyItem;
                    }
                    db.collection('employeeoptions').find().toArray(function (err, result4) {
                        if (err) throw err;
                        if (result4.length == 0) {
                            result4 = emptyEmployee;
                        }
                        res.render('Homepage.ejs', { listOfPerformers: result, measures: result1, Measurements: emptyModel, cloth: result2, cloth1: emptyCloth, item1: emptyItem, item: result3, empl:result4, empl1: emptyEmployee });
                    })
                })
            });
        });
    });
})


api.post('/shop1', function (req, res) {
// console.log("shop pull list");
// if ((req.body.shopID).length > 0) {
//             db.collection('shoplist').update({ 'shopID': req.body.shopID }, { $set: { 'duedate': req.body.duedate } });
//             console.log(req.body.duedate);
//             return res.redirect('/shop')
//         }else{
var size = req.body.size;
var duedate = req.body.duedate;
var shopID = req.body.shopID;
     
     var newShopOption = new Model4({
        
        size: size,
        duedate: duedate,
        shopID: shopID
        
    });
    
        Model4.create(newShopOption, function (err, shoplist) {
            if (err) throw err;
        });
//         db.collection('shoplist').find().toArray(function (err, result5) {
//             if (err) throw err;
//             if (result5.length == 0) {
//                 result5 = emptyShoplist;
//             }
//         return res.redirect('/shop',{ shp: result5, shp1: emptyShoplist})
//     });
        
//     }

//     db.collection('shoplist').find().toArray(function (err, result5) {
//         if (err) throw err;
//         if (result5.length == 0) {
//             result5 = emptyShoplist;
//         }
//     return res.redirect('/shop',{ shp: result5, shp1: emptyShoplist})
// });
    
        return res.redirect('/shop')
    // }
      })
    

module.exports = api;