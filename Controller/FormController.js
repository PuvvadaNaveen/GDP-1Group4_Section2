const express = require('express')
const api = express.Router()
const Model = require('../models/form')


api.post('/save',  function (req, res) {
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var charactername = req.body.charactername;
    var phonenumber = req.body.phonenumber;
    var textchoice =req.body.textchoice;
    var email = req.body.email1;
    var agreement = req.body.agreement;
    var dominanthand = req.body.dominanthand;
    var height = req.body.heught;
    var estimatedweight = req.body.estimatedweight;
    var eyewearchoice =req.body.eyewearchoice;
    var hair = req.body.hair;
    var facialhai = req.body.facialhai;
    var earschoice = req.body.earschoice;
    var otherpiercings = req.body.otherpiercings;
    var tattoos = req.body.tattoos;
    var tattooagreement =req.body.tattooagreement;
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
        firstname:firstname,
        lastname: lastname,
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
        allergy :allergy,
        other: other,
        allergies : allergies

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
  