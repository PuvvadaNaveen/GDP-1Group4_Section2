const express = require('express')
const api = express.Router()
const Model = require('../models/form')
const Model1 = require('../models/employeeOption')
const Model2 = require('../models/colorOption')
const Model3 = require('../models/clothOptions')
const Model4 = require('../models/shoplist')
const Model5 = require('../models/ClothAndColor')
const mongoose = require('mongoose')
const indexPage = require('../routes/index')
const db = mongoose.connection;
var ObjectId = require('mongodb').ObjectID;

// Empty measurements form

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

// Empty form for cloth items

let emptyCloth = [
    {
        clothselect: "",
        clothID: ""
    }
]

// Empty form for color items

let emptyItem = [
    {
        itemId: "",
        colorID: ""
    }
]

// Empty form for employee items

let emptyEmployee = [
    {
        employeeId: ""
    }
]

// Empty form for shop pull list

let emptyShoplist = [
    {
        shopID: ""
    },
    {
        duedate: "mm-dd-yyyy"
    },
    {
        size: ""
    }
]
let clothAndColorEmpty = [
    {
        performerId:"",
        topItem: "",
        topColor: "",
        bottomItem: "",
        bottomColor: "",
        underItem: "",
        underColor: "",
        shoeItem: "",
        shoeColor: "",
        otherItem: "",
        otherColor: "",
    }
]
let emptyPlay = [
    {
        PlayStartDate: "",
        PlayEndDate: "",
        playname: ""
    }
]

// Method for saving form details

api.post('/save', function (req, res) {
    var firstname = req.body.firstname.charAt(0).toUpperCase() + req.body.firstname.slice(1).toLowerCase();
    var lastname = req.body.lastname.charAt(0).toUpperCase() + req.body.lastname.slice(1).toLowerCase();
    var playname = req.body.playname.charAt(0).toUpperCase() + req.body.playname.slice(1).toLowerCase();
    var playdate = req.body.playdate;
    var charactername = req.body.charactername.charAt(0).toUpperCase() + req.body.charactername.slice(1).toLowerCase(); req.body.playname;;
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
        return res.send("Details submitted successfully");
    })
})

// Method to display basic information form details in homepage

api.post('/edit', function (req, res) {
    var query = { "_id": ObjectId(req.body.perfId1) };
    db.collection('forms').find(query).toArray(function (err, result) {
        if (err) throw err;
        db.collection('plays').find().toArray(function (err, result10) {
            if (err) throw err;
            if (result10.length == 0) {
                result10 = emptyPlay;
            }
        res.render('form.ejs', { perf: result, playDetails: result10 });
        // res.redirect('Homepage.ejs',{listOfPerformers : result});
     }); });
})

// Method for deleting the performer details from designer pull list

api.post('/delete', function (req, res) {
    var query = { "_id": ObjectId(req.body.perfId2) };
    var query1 = { "_id": ObjectId(req.body.empdel) };
    var query2 = { "_id": ObjectId(req.body.itemId1) };
    var query3 = { "_id": ObjectId(req.body.clothAndColorId) };
    db.collection('forms').deleteOne(query, function (err, result) {
        if (err) throw err;
        db.collection('ClothAndColor').deleteOne(query3, function (err, result) {
            if (err) throw err;
            db.collection('coloroptions').deleteOne(query2, function (err, result) {
                if (err) throw err;
                db.collection('employeeoptions').deleteOne(query1, function (err, result) {
                    if (err) throw err;
                    return res.redirect('/')
                })
            })
        })
    });
})

// Method for sorting performer details in home page

api.post('/sort', function (req, res) {
    var sortby;
    console.log(req.body.lastname);
    console.log(req.body.firstname);
    if (req.body.firstname != null && req.body.firstname != "") {
        sortby = req.body.firstname;
    }
    else if (req.body.lastname != null && req.body.lastname != "") {
        sortby = req.body.lastname;
    }
    console.log(sortby);
    var str = encodeURIComponent(sortby);
    res.redirect('/?valid=' + str);
});

// Method for finding performer using performer name

api.post('/getByName', function (req, res) {
    var query = { firstname: req.body.firstname };

    db.collection('forms').find(query).toArray(function (err, result) {
        var queryresname = false;
        for (let i = 0; i < result.length; i++) {
            if (query.firstname === result[i].firstname) {
                queryresname = true;
                console.log(queryresname)
            }
        }
        // console.log(result[0].firstname)
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
                        db.collection('ClothAndColor').find().toArray(function (err, result5) {
                            if (err) throw err;
                            if (result5.length == 0) {
                                result5 = clothAndColorEmpty;
                            }
                            if (Boolean(queryresname))
                                res.render('Homepage.ejs', { listOfPerformers: result, measures: result1, Measurements: emptyModel, cloth: result2, cloth1: emptyCloth, item1: emptyItem, item: result3, empl: result4, empl1: emptyEmployee, clothAndColorResults: result5, emptyClothAndColor: clothAndColorEmpty[0] });
                            else
                                res.send('No records found')
                        })
                    })
                })
            });
        });
    });
})

// Method for finding performer using play name

api.post('/getByPlay', function (req, res) {
    console.log(req.body.playname);
    var query = { playname: req.body.playname };

    db.collection('forms').find(query).toArray(function (err, result) {
        var queryresplay = false;
        for (let i = 0; i < result.length; i++) {
            if (query.playname === result[i].playname) {
                queryresplay = true;
                console.log(queryresplay)
            }
        }
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
                        db.collection('ClothAndColor').find().toArray(function (err, result5) {
                            if (err) throw err;
                            if (result5.length == 0) {
                                result5 = clothAndColorEmpty;
                            }
                            if (Boolean(queryresplay))
                                res.render('Homepage.ejs', { listOfPerformers: result, measures: result1, Measurements: emptyModel, cloth: result2, cloth1: emptyCloth, item1: emptyItem, item: result3, empl: result4, empl1: emptyEmployee, clothAndColorResults: result5, emptyClothAndColor: clothAndColorEmpty[0] });
                            else
                                res.send('No records found')
                        })
                    })
                })
            });
        });
    });
})

// Method for finding performer using play date

api.post('/getByDate', function (req, res) {
    var query = { playdate: req.body.playdate };

    db.collection('forms').find(query).toArray(function (err, result) {
        var queryresdate = false;
        for (let i = 0; i < result.length; i++) {
            if (query.playdate === result[i].playdate) {
                queryresdate = true;
                console.log(queryresdate)
            }
        }
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
                        db.collection('ClothAndColor').find().toArray(function (err, result5) {
                            if (err) throw err;
                            if (result5.length == 0) {
                                result5 = clothAndColorEmpty;
                            }
                            if (Boolean(queryresdate))
                                res.render('Homepage.ejs', { listOfPerformers: result, measures: result1, Measurements: emptyModel, cloth: result2, cloth1: emptyCloth, item1: emptyItem, item: result3, empl: result4, empl1: emptyEmployee, clothAndColorResults: result5 , emptyClothAndColor: clothAndColorEmpty[0]});
                            else
                                res.send('No records found')
                        })
                    })
                })
            });
        });
    });
})

// Method for selecting employee who is going to work for a performer

api.post('/emp01', function (req, res) {
    if ((req.body.employeeId.length) > 0) {
        db.collection('employeeoptions').update({ 'empID': req.body.empID }, { $set: { 'selectEmployee1': req.body.selectEmployee1 } });
        console.log(req.body.selectEmployee1);
    } else {
        var selectEmployee1 = req.body.selectEmployee1;
        var empID = req.body.empID;

        var newEmployeeOption = new Model1({

            selectEmployee1: selectEmployee1,
            empID: empID


        });

        Model1.create(newEmployeeOption, function (err, employeeOption) {
            if (err) throw err;
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
                        db.collection('ClothAndColor').find().toArray(function (err, result5) {
                            if (err) throw err;
                            if (result5.length == 0) {
                                result5 = clothAndColorEmpty;
                            }
                            res.render('Homepage.ejs', { listOfPerformers: result, measures: result1, Measurements: emptyModel, cloth: result2, cloth1: emptyCloth, item1: emptyItem, item: result3, empl: result4, empl1: emptyEmployee, clothAndColorResults: result5, emptyClothAndColor: clothAndColorEmpty[0] });
                        })
                    })
                })
            });
        });
    });
})

// Method for selecting color of cloth for a particular performer

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
                        res.render('Homepage.ejs', { listOfPerformers: result, measures: result1, Measurements: emptyModel, cloth: result2, cloth1: emptyCloth, item1: emptyItem, item: result3, empl: result4, empl1: emptyEmployee });
                    })
                })
            });
        });
    });
})

// Method for selecting cloth for a particular performer

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
                        res.render('Homepage.ejs', { listOfPerformers: result, measures: result1, Measurements: emptyModel, cloth: result2, cloth1: emptyCloth, item1: emptyItem, item: result3, empl: result4, empl1: emptyEmployee });
                    })
                })
            });
        });
    });
})

// Method for generating shop pull list information 

api.post('/shop1', function (req, res) {
    if ((req.body.sID).length > 0) {
        console.log("shp1 create");
        db.collection('shopoptions').update({ 'shopID': req.body.shopID }, { $set: { 'duedate': req.body.duedate, 'size': req.body.size, 'notes': req.body.notes } });
        return res.redirect('/shop')
    } else {
        console.log("shp1 else")
        var size = req.body.size;
        var duedate = req.body.duedate;
        var shopID = req.body.shopID;
        var notes = req.body.notes;

        var newShopOption = new Model4({

            size: size,
            duedate: duedate,
            shopID: shopID,
            notes: notes

        });

        Model4.create(newShopOption, function (err, shopoptions) {
            if (err) throw err;
        });
    }

    db.collection('forms').find().toArray(function (err, result) {
        if (err) throw err;
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
                db.collection('shopoptions').find().toArray(function (err, result5) {
                    if (err) throw err;
                    if (result5.length == 0) {
                        result5 = emptyShoplist;
                    }
                    db.collection('ClothAndColor').find().toArray(function (err, result6) {
                        if (err) throw err;
                        if (result6.length == 0) {
                            result6 = clothAndColorEmpty;
                        }
                    
                    return res.render('shop.ejs', { list: result, cloth: result2, cloth1: emptyCloth, item1: emptyItem, item: result3, shp: result5, shp1:emptyShoplist, ClothAndColor : result6,clothAndColorEmp :  clothAndColorEmpty})
                });
            })})
        })
    })

})
api.post('/clothAndColor', function (req, res) {
    if ((req.body.clothAndColorUpdateId).length > 0) {
        console.log("update");
        db.collection('ClothAndColor').update({ 'performerId': req.body.clothAndColorUpdateId }, {
            $set: {
                'topItem': req.body.topItem, 'topColor': req.body.topColor, 'bottomItem': req.body.bottomItem, 'bottomColor': req.body.bottomColor
                , 'underItem': req.body.underItem, 'underColor': req.body.underColor, 'shoeItem': req.body.shoeItem
                , 'shoeColor ': req.body.shoeColor, 'otherItem': req.body.otherItem, 
                'otherColor': req.body.otherColor,
            }
        });
    }else{
    var performerId = req.body.clothAndColorId;
    var topItem = req.body.topItem;
    var topColor = req.body.topColor;
    var bottomItem = req.body.bottomItem;
    var bottomColor = req.body.bottomColor;
    var underItem = req.body.underItem;
    var underColor = req.body.underColor;
    var shoeItem = req.body.shoeItem;
    var shoeColor = req.body.shoeColor;
    var otherItem = req.body.otherItem;
    var otherColor = req.body.otherColor;

    var newClothAndColor = new Model5({
        performerId: performerId,
        topItem: topItem,
        topColor: topColor,
        bottomItem: bottomItem,
        bottomColor: bottomColor,
        underItem: underItem,
        underColor: underColor,
        shoeItem: shoeItem,
        shoeColor: shoeColor,
        otherItem: otherItem,
        otherColor: otherColor
    });

    db.collection('ClothAndColor').save(newClothAndColor, (err, result5) => {
        if (err) return console.log('error')
    })
    }
    return res.redirect('/home')
})
module.exports = api;


