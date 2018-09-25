const express = require('express')
const api = express.Router()
const Model = require('../models/rental')
const mongoose = require('mongoose')
const db = mongoose.connection;


api.post('/rental1',  function (req, res) {
    console.log("ssss")
    var StartDate = req.body.StartDate;
    var EndDate = req.body.EndDate;
    var firstname = req.body.firstname;
    var phone = req.body.phone;
    var mail =req.body.mail;
    var fee =req.body.fee;
    var rental_item = req.body.rental_item;
   

    var newRental = new Model({
        StartDate: StartDate,
        EndDate: EndDate,
        firstname: firstname,
        phone: phone,
        mail: mail,
        fee: fee,
        rental_item: rental_item
       
        
    });
    
        Model.create(newRental, function (err, rental) {
            if (err) throw err;
        });
         return res.redirect('/rental_list')
      })

//   api.get('/getrentals',  function (req, res) {
//      db.collection('rentals').find().toArray(function(err,result){
//         if (err) throw err;
//         console.log(result);
//         res.render('rental_list.ejs',{list : result});
//      });
//     //  return res.redirect('/basic')
//    })
      module.exports = api;
      