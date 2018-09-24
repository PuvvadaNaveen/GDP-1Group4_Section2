const express = require('express')
const api = express.Router()
const Model = require('../models/home')
const mongoose = require('mongoose')
const db = mongoose.connection;


api.post('/home1',  function (req, res) {
    var tu = req.body.tu;
    var sk= req.body.sk;
    var su = req.body.su;
    var tr = req.body.tr;
    
   

    var newHome = new Model({
        tu: tu,
        sk: sk,
        su: su,
        tr:tr,      
        
    });
    
    Model.create(newHome, function (err, home) {
        if (err) throw err;
        console.log(home);
    });
 

    res.send("saved")
  })
      module.exports = api;      