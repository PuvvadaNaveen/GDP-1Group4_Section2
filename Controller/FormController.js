const express = require('express')
const api = express.Router()
const Model = require('../models/form')


api.post('/save',  function (req, res) {
   // LOG.info(`Handling POST ${req}`)
    //LOG.debug(JSON.stringify(req.body))
   // const data = req.app.locals.form.;
    // const formData = new Model();
    var firstname = req.body.firstname;
	var lastname = req.body.lastname;
	// var username = req.body.username;
	// var password = req.body.password;
	// var password2 = req.body.password2;
    // formData.firstname = req.body.firstname;
    // formData.lastname = req.body.lastname;
    // formData.charactername = req.body.charactername;
    // formData.phonenumber = parseInt(req.body.phonenumber, 10);
   // data.push(formData)
    // console.log(formData);
    var newForm = new Model({
        firstname:firstname,
        lastname: lastname
    });
    Model.create(newForm, function (err, form) {
        if (err) throw err;
        console.log(form);
    });
    return res.redirect('/basic')

    
  })

  api.get('/getinfo',  function (req, res) {
    console.log("getinfybefore");  
      console.log("getinfyafter");

     Model.find({}, function (err, form) {
         if (err) throw err;
         console.log(form);
         return res.json(form);
     });
    //  return res.redirect('/basic')
    
 
     
   })
  module.exports = api;
  