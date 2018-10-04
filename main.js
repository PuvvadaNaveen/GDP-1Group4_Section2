var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
const favicon = require('serve-favicon');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');
var mongoose = require('mongoose');
var nodemailer = require('nodemailer');
var randomstring = require('randomstring');
var access_code = module.exports = randomstring.generate(7);
global.globalString=(access_code)
var ObjectId = require('mongodb').ObjectID;

mongoose.connect('mongodb+srv://akhil:abc@gdp-x1euc.mongodb.net/test?retryWrites=true');
mongoose.connection.once('open', ()=>{
  console.log('connected to database');
});
var db = mongoose.connection;

var routes = require('./routes/index');
var users = require('./routes/users');
var forms = require('./Controller/FormController')
// var find = require('./Controller/FindController')
var rentals = require('./Controller/RentalController')
var measures= require('./Controller/MeasureController')
var plays = require('./Controller/PlayController')
// var homes = require('./Controller/HomeController')
// Init App
var app = express();

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout:'layout'}));
app.set('view engine', 'handlebars');

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'Assets')));
app.use(favicon(path.join(__dirname,'Images','favicon-16x16.png')));

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// Connect Flash
app.use(flash());

// Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.success = req.flash('success');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});



app.use('/', routes);
app.use('/users', users);
app.use('/FormController', forms);
// app.use('/FindController', find);
app.use('/RentalController', rentals);
app.use('/MeasureController', measures);
app.use('/PlayController', plays);
// app.use('/HomeController', homes);

// mail for access code
app.post("/access_mail",function(req, res){
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'Projectteamsec02group04@gmail.com',
      pass: 'Projectteam05'
    }
  });
  var mailOptions = {
    from: 'Projectteamsec02group04@gmail.com',
    to: req.body.email1,
    subject: 'Access code for registration', 
    html: 'The access code for Registration is  ' + access_code,
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      console.log(access_code);
      res.send('Mail Sent Successfully');
    }
  });
});

//mail
app.post("/mail",function(req, res){
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'Projectteamsec02group04@gmail.com',
      pass: 'Projectteam05'
    }
  });
  var mailOptions = {
    from: 'Projectteamsec02group04@gmail.com',
    to: req.body.email1,
    subject: 'Collecting performers details',
    html: '<p>Hello,</p><p>Please fill the basic information form.</p><p>Here is the link for form :<a href="http://localhost:8089/form"> Click here</a></p></br><p>Regards</p>',  
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Mail Sent Successfully');
    }
  });
});
// if we get a 404 status, render 404.ejs view
app.use(function (request, response) {
  response.status(404).render('404.ejs');
});

// Set Port
app.set('port', (process.env.PORT || 8089));

app.listen(app.get('port'), function(){
  console.log('Server started on port '+app.get('port'));
  // console.log('Server is listening on port ' + app.port);
});

function deletePerformer(idd){
  var query = {'_id' : ObjectId(idd)};
  db.collection("forms").deleteOne(query, function(err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
    });
    location.replace('/');
}