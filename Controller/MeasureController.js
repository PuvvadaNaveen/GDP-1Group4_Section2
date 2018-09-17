const express = require('express')
const api = express.Router()
const Model = require('../models/measure')
const mongoose = require('mongoose')
const db = mongoose.connection;


api.post('/measure1',  function (req, res) {
    console.log("ssss")
    var headcicumference = req.body.headcicumference;
    var neck = req.body.neck;
    var armcycle = req.body.armcycle;
    var centrebacktowrist = req.body.centrebacktowrist;
    var chestrelaxed =req.body.chestrelaxed;
    var chestexpanded =req.body.chestexpanded;
    var chestovercompressiongarnment = req.body.chestovercompressiongarnment;
    var chestoverbodypadding =req.body.chestoverbodypadding;
    var waistrelaxed =req.body.waistrelaxed;
    var waistexpande =req.body.waistexpande;
    var fullhip =req.body.fullhip;
    var halfgirth =req.body.halfgirth;
    var fullgirth =req.body.fullgirth;
    var inseamtoankle =req.body.inseamtoankle;
    var inseamtofloor =req.body.inseamtofloor;
    var waistovercompressiongarnment =req.body.waistovercompressiongarnment;
    var hipovercompressiongarnment =req.body.hipovercompressiongarnment;
    var waistoverbodypadding =req.body.waistoverbodypadding;
    var hipoverbodypadding =req.body.hipoverbodypadding;
    var shoes =req.body.shoes;
    var dominanthand =req.body.dominanthand;
    var otheroverbodypadding =req.body.otheroverbodypadding;

    var newMeasure = new Model({
        headcicumference: headcicumference,
        neck: neck,
        armcycle: armcycle,
        centrebacktowrist: centrebacktowrist,
        chestrelaxed: chestrelaxed,
        chestexpanded: chestexpanded,
        chestovercompressiongarnment: chestovercompressiongarnment,
        chestoverbodypadding : chestoverbodypadding,
        waistrelaxed : waistrelaxed,
        waistexpande : waistexpande,
        fullhip : fullhip,
        halfgirth : halfgirth,
        fullgirth : fullgirth,
        inseamtoankle : inseamtoankle,
        inseamtofloor : inseamtofloor,
        waistovercompressiongarnment : waistovercompressiongarnment,
        hipovercompressiongarnment : hipovercompressiongarnment,
        waistoverbodypadding : waistoverbodypadding,
        hipoverbodypadding : hipoverbodypadding,
        shoes : shoes,
        dominanthand : dominanthand,
        otheroverbodypadding : otheroverbodypadding
        
    });
    
        Model.create(newMeasure, function (err, measure) {
            if (err) throw err;
            console.log(measure);
        });
     
    
        res.send("saved")
      })

      module.exports = api;
      