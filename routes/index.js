var express = require('express');
var router = express.Router();
var formCont = require('../Controller/FormController');
var rentalController = require('../Controller/RentalController');
const mongoose = require('mongoose')
const db = mongoose.connection;

// Get Homepage
router.get('/', ensureAuthenticated, function(req, res){
    db.collection('forms').find().toArray(function(err, result){
        if (err) throw err;
        console.log(result);
        res.render('Homepage.ejs',{listOfPerformers : result});
        //   return res.json(result);
    });
   //  return res.redirect('/basic')
	// res.render('Homepage.ejs');
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
router.get('/home', function(request, response){
    db.collection('forms').find().toArray(function(err, result){
        if (err) throw err;
        console.log(result);
        response.render('Homepage.ejs',{listOfPerformers : result});
        //   return res.json(result);
    });
   //  return res.redirect('/basic')
	// res.render('Homepage.ejs');
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
    // response.render('rental_list.ejs')
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
}

module.exports = router;

//*************
