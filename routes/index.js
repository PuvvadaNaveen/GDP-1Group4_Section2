var express = require('express');
var router = express.Router();
var formCont = require('../Controller/FormController');
var rentalController = require('../Controller/RentalController');
var model = require('../models/measure')
const mongoose = require('mongoose')
const db = mongoose.connection;

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
        employeeId: "",
        empID: ""
    }
]

// Empty form for shop pull list

let emptyShoplist = [
    {
        shopID: ""
    },
    {
        duedate: "mm-dd-yyyy"
    }
]
let clothAndColorEmpty = [
    {
        topItem: ""
    },
    {
        topColor: ""
    },
    {
        bottomItem: ""
    },
    {
        bottomColor: ""
    },
    {
        underItem: ""
    },
    {
        underColor: ""
    },
    {
        shoeItem: ""
    },
    {
        shoeColor: ""
    },
    {
        otherItem :""
    },
    {
        otherColor:""
    }
]

// Routing for geting Homepage

router.get('/', ensureAuthenticated, function (req, res) {

    var sort = {};
    sort[req.query.valid] = 1;

    db.collection('forms').find().sort(sort).toArray(function (err, result) {
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
                            res.render('Homepage.ejs', { listOfPerformers: result, measures: result1, Measurements: emptyModel, cloth: result2, cloth1: emptyCloth, item1: emptyItem, item: result3, empl: result4, empl1: emptyEmployee,clothAndColorResults:result5});
                        });
                    });
                });
            });
        });
    });
});

// Passport function to make sure that pages are displayed only when they are logged in

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        req.flash('success_msg', 'Please log in to continue');
        res.redirect('/users/login');
    }

    // Routing for disigner pull list

    router.get('/home', function (request, response) {

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
                            response.render('Homepage.ejs', { listOfPerformers: result, measures: result1, Measurements: emptyModel, cloth: result2, cloth1: emptyCloth, item1: emptyItem, item: result3, empl: result4, empl1: emptyEmployee });
                        })
                    })
                });
            });
        });
    })

    // Routing for shop pull list

    router.get('/shop', (request, response, next) => {

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
                        return response.render('shop.ejs', { list: result, cloth: result2, cloth1: emptyCloth, item1: emptyItem, item: result3, shp: result5, shp1: emptyShoplist })
                    });
                })
            })
        })
    })

    // Routing for find a performer by name

    router.get('/find', (request, response, next) => {
        response.render('findperformer.ejs')
    })

    // Routing for find a performer by play name

    router.get('/findp', (request, response, next) => {
        response.render('findplay.ejs')
    })

    // Routing for find a performer by date

    router.get('/fin', (request, response, next) => {
        response.render('finddate.ejs')
    })

    // Routing for sending basic information form

    router.get('/basic', (request, response, next) => {
        response.render('Basic_info.handlebars')
    })

    // Routing for sending accesscode

    router.get('/access', (request, response, next) => {
        response.render('access_code.handlebars')
    })

    // Routing for rentals page

    router.get('/rental', (request, response, next) => {
        response.render('Rental Form.ejs')
    })

    // Routing for rental list

    router.get('/rental_list', (request, response, next) => {
        db.collection('rentals').find().toArray(function (err, result) {
            if (err) throw err;
            response.render('rental_list.ejs', { list: result });
        })
    })

    // Routing for displaying basic information form

    router.get('/form', (request, response, next) => {

        let emptyForm = [
            {
                firstname: "",
                lastname: "",
                playname: "",
                playdate: "",
                charactername: "",
                phonenumber: "",
                textchoice: "",
                email: "",
                agreement: "",
                dominanthand: "",
                height: "",
                estimatedweight: "",
                eyewearchoice: "",
                hair: "",
                facialhai: "",
                earschoice: "",
                otherpiercings: "",
                tattoos: "",
                tattooagreement: "",
                comments: "",
                shoes: "",
                danceshoes: "",
                shirtsize: "",
                pants: "",
                brasize: "",
                ring: "",
                allergy: "",
                other: "",
                allergies: ""
            }
        ]
        result = emptyForm;

        response.render('form.ejs', { perf: result })

    })

    // Routing for displaying plays information

    router.get('/plays', (request, response, next) => {
        db.collection('plays').find().toArray(function (err, result) {
            if (err) throw err;
            response.render('plays.ejs', { listOfPlays: result });
        })
    })

    // Routing for adding new play

    router.post('/Add_play', (request, response, next) => {
        response.render('Add_play.ejs')
    })

    // Routing for contact page

    router.get('/contact', (request, response, next) => {
        response.render('contact.ejs')
    })
}

module.exports = router;

//*************
