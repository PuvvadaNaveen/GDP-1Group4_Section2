const express = require('express')
const api = express.Router()
const Model = require('../models/clothOptions')
const mongoose = require('mongoose')
const db = mongoose.connection;

api.post('/cloth01',  function (req, res) {
    
    var selectCloth = req.body.selectCloth;
    var clothID = req.body.clothID;

    var newClothOption = new Model({
        
        selectCloth: selectCloth,
        clothID: clothID
        
        
    });
    
        Model.create(newClothOption, function (err, ClothOption) {
            if (err) throw err;
        });
        return res.redirect('/')
      })


module.exports = api;