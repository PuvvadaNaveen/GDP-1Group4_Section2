const express = require('express')
const api = express.Router()
const Model = require('../models/colorOption')
const mongoose = require('mongoose')
const db = mongoose.connection;

api.post('/clr01',  function (req, res) {
    
    var selectColor01 = req.body.selectColor01;
    var colorID = req.body.colorID;

    var newColorOption = new Model({
        
        selectColor01: selectColor01,
        colorID: colorID
        
        
    });
    
        Model.create(newColorOption, function (err, ColorOption) {
            if (err) throw err;
        });
        return res.redirect('/')
      })


  module.exports = api;