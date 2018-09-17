const express = require('express')
const api = express.Router()
const Model = require('../models/plays')
const mongoose = require('mongoose')
const db = mongoose.connection;


api.post('/play1',  function (req, res) {
    var PlayStartDate = req.body.PlayStartDate;
    var PlayEndDate = req.body.PlayEndDate;
    var playname = req.body.playname;
    
   

    var newPlay = new Model({
        PlayStartDate: PlayStartDate,
        PlayEndDate: PlayEndDate,
        playname: playname       
        
    });
    
        Model.create(newPlay, function (err, plays) {
            if (err) throw err;
            console.log(plays);
        });
        return res.redirect('/plays')
      })

      module.exports = api;      