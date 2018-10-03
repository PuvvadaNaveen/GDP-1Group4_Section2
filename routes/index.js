var express = require('express');
var router = express.Router();
var formCont = require('../Controller/FormController');
var rentalController = require('../Controller/RentalController');
var model = require('../models/measure')
const mongoose = require('mongoose')
const db = mongoose.connection;

// Get Homepage
router.get('/', ensureAuthenticated, function(req, res){
    // MeasureSchema.statics.getSkeleton = function () {
    //     var data = {};
    //     Object.keys(MeasureSchema.paths).forEach(function (path) {
    //       return path !== '_id' ? data[path] = "" : false;
    //     });
    //     return data;
    //     }
    //     console.log(getSkeleton());
    let emptyModel = [
        {
            performerId: "",
            perfId:"",
            headcicumference: "",
            neck: "",
            armcycle: "",
            centrebacktowrist: "",
            chestrelaxed: "",
            chestexpanded: "",
            chestovercompressiongarnment: "",
          chestoverbodypadding: "",
          waistrelaxed: "",
          waistexpande : "",
          fullhip:"",
            halfgirth: "",
            fullgirth: "",
            inseamtoankle: "",
            inseamtofloor: "",
            waistovercompressiongarnment: "",
            hipovercompressiongarnment:"",
            waistoverbodypadding: "",
            hipoverbodypadding: "",
            shoes:"",
            dominanthand: "",
            otheroverbodypadding: "",
        }
    ]
    
    db.collection('forms').find().toArray(function(err, result){
        if (err) throw err;
    
    db.collection('measures').find().toArray(function(err, result1){
        if (err) throw err;
    if(result1.length ==0){
        result1 = emptyModel;
    }
// console.log("ssssssss");
// console.log(result);
// console.log("ssssssss");
// console.log(result1);
    res.render('Homepage.ejs',{listOfPerformers : result,measures : result1,Measurements:emptyModel});
        
        //   return res.json(result);    
});
});
});

// function getMeasures()

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
router.get('/home', function(request, response){
    let emptyModel = [
        {
            performerId: "",
            perfId:"",
            headcicumference: "",
            neck: "",
            armcycle: "",
            centrebacktowrist: "",
            chestrelaxed: "",
            chestexpanded: "",
            chestovercompressiongarnment: "",
          chestoverbodypadding: "",
          waistrelaxed: "",
          waistexpande : "",
          fullhip:"",
            halfgirth: "",
            fullgirth: "",
            inseamtoankle: "",
            inseamtofloor: "",
            waistovercompressiongarnment: "",
            hipovercompressiongarnment:"",
            waistoverbodypadding: "",
            hipoverbodypadding: "",
            shoes:"",
            dominanthand: "",
            otheroverbodypadding: "",
        }
    ]
    
    db.collection('forms').find().toArray(function(err, result){
        if (err) throw err;
    
    db.collection('measures').find().toArray(function(err, result1){
        if (err) throw err;
    if(result1.length ==0){
        result1 = emptyModel;
    }
// console.log("ssssssss");
// console.log(result);
// console.log("ssssssss");
// console.log(result1);
    response.render('Homepage.ejs',{listOfPerformers : result,measures : result1,Measurements:emptyModel});
        
        //   return res.json(result);    
});
});
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
    db.collection('rentals').find().toArray(function(err,result){
        if (err) throw err;
        console.log(result);
        response.render('rental_list.ejs',{list : result});
})
})

router.get('/Signup_Login', (request, response, next) => {
    response.render('SIgnup_Login.ejs')
})
router.get('/form', (request, response, next) => {
    response.render('form.ejs')
})
router.get('/plays', (request, response, next) => {
    db.collection('plays').find().toArray(function(err,result){
        if (err) throw err;
        console.log(result);
    response.render('plays.ejs',{listOfPlays: result});
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
