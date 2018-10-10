var express = require('express');
var router = express.Router();
var formCont = require('../Controller/FormController');
var rentalController = require('../Controller/RentalController');
var model = require('../models/measure')
const mongoose = require('mongoose')
const db = mongoose.connection;

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
// Get Homepage
router.get('/', ensureAuthenticated, function (req, res) {
    // MeasureSchema.statics.getSkeleton = function () {
    //     var data = {};
    //     Object.keys(MeasureSchema.paths).forEach(function (path) {
    //       return path !== '_id' ? data[path] = "" : false;
    //     });
    //     return data;
    //     }
    //     console.log(getSkeleton());


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
});

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        req.flash('error_msg', 'You are not logged in');
        res.redirect('/users/login');
    }
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
                            response.render('Homepage.ejs', { listOfPerformers: result, measures: result1, Measurements: emptyModel, cloth: result2, cloth1: emptyCloth, item1: emptyItem, item: result3, empl:result4, empl1: emptyEmployee });
                        })
                    })
                });
            });
        });
    })
    router.get('/shop', (request, response, next) => {
        db.collection('forms').find().toArray(function (err, result) {
            if (err) throw err;
            response.render('shop.ejs', { list: result });
        })
    })

    router.get('/find', (request, response, next) => {
        response.render('findperformer.ejs')
    })
    router.get('/findp', (request, response, next) => {
        response.render('findplay.ejs')
    })
    router.get('/fin', (request, response, next) => {
        response.render('finddate.ejs')
    })

    router.get('/basic', (request, response, next) => {
        response.render('Basic_info.ejs')
    })

    router.get('/access', (request, response, next) => {
        response.render('access_code.ejs')
    })

    router.get('/rental', (request, response, next) => {
        response.render('Rental Form.ejs')
    })
    router.get('/rental_list', (request, response, next) => {
        db.collection('rentals').find().toArray(function (err, result) {
            if (err) throw err;
            response.render('rental_list.ejs', { list: result });
        })
    })



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
    router.get('/plays', (request, response, next) => {
        db.collection('plays').find().toArray(function (err, result) {
            if (err) throw err;
            response.render('plays.ejs', { listOfPlays: result });
        })
    })
    router.post('/Add_play', (request, response, next) => {
        response.render('Add_play.ejs')
    })
    router.get('/contact', (request, response, next) => {
        response.render('contact.ejs')
    })
}

module.exports = router;

//*************
