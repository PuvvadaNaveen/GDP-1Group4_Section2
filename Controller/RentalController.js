const express = require('express')
const api = express.Router()
const Model = require('../models/rental')


api.post('/rental1',  function (req, res) {
    console.log("ssss")
    var Date1 = req.body.Date1;
    var Date2 = req.body.Date2;
    var firstname = req.body.firstname;
    var phn = req.body.phn;
    var mail =req.body.mail;
    var std = req.body.std;
    var prnt = req.body.prnt;
    var time = req.body.time;
    var S = req.body.S;
    var t = req.body.t;
    var fee =req.body.fee;
    var amt = req.body.amt;
    var rtn = req.body.rtn;
    var charges = req.body.charges;

    var newRental = new Model({
        Date1: Date1,
        Date2: Date2,
        firstname: firstname,
        phn: phn,
        mail: mail,
        std: std,
        prnt: prnt,
        time: time,
        S: S,
        t: t,
        fee: fee,
        amt: amt,
        rtn: rtn,
        charges: charges,
        
    });
    
        Model.create(newRental, function (err, rental) {
            if (err) throw err;
            console.log(rental);
        });
        // return res.redirect('/basic')
    
        res.send("saved")
      })
      module.exports = api;
      