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
        });
        return res.redirect('/plays')
      })

    //   api.post('/delete', function (req, res) {
        
    //      var query1= { "_id": ObjectId(req.body.PlayStartDate) };
    //      var query2= { "_id": ObjectId(req.body.PlayEndDate) };
    //      var query = { "_id": ObjectId(req.body.playname) };
         
    //      db.collection('plays').deleteOne(query1, function (err, result) {
    //          if (err) throw err;
    //          db.collection('plays').deleteOne(query2, function (err, result) {
    //              if (err) throw err;
    //              db.collection('plays').deleteOne(query, function (err, result) {
    //                  if (err) throw err;
                     
    //          return res.redirect('/plays')
    //                  })
    //              })
    //          });
    //      })
      module.exports = api;      