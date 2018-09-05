var express = require('express');
var router = express.Router();

// Get Homepage
router.get('/', ensureAuthenticated, function(req, res){
	res.render('Homepage.ejs');
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
	router.get('/home', (request, response, next) => {
    response.render('Homepage.ejs')
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

router.get('/Signup_Login', (request, response, next) => {
    response.render('SIgnup_Login.ejs')
})
}

module.exports = router;

//*************
