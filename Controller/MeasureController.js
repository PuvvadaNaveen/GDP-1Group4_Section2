const express = require('express')
const api = express.Router()
const Model = require('../models/measure')
const mongoose = require('mongoose')
const db = mongoose.connection;
var ObjectId = require('mongodb').ObjectID;


api.post('/measure1',  function (req, res) {
    var d = new Date();
    console.log("ssss");
    if((req.body.mesId).length > 0){
        db.collection('measures').update({'perfId': req.body.perfId},{$set:{'headcicumference':req.body.headcicumference,'neck':req.body.neck,'armcycle':req.body.armcycle,'centrebacktowrist':req.body.centrebacktowrist
    ,'chestrelaxed':req.body.chestrelaxed,'chestexpanded':req.body.chestexpanded,'chestovercompressiongarnment':req.body.chestovercompressiongarnment
,'chestoverbodypadding ':req.body.chestoverbodypadding,'waistrelaxed':req.body.waistrelaxed,'waistexpande':req.body.waistexpande,'fullhip':req.body.fullhip
,'halfgirth':req.body.halfgirth,
'fullgirth':req.body.fullgirth,
'inseamtoankle':req.body.inseamtoankle,
 'inseamtofloor':req.body.inseamtofloor,
 'waistovercompressiongarnment':req.body.waistovercompressiongarnment,
'hipovercompressiongarnment':req.body.hipovercompressiongarnment,
 'waistoverbodypadding':req.body.waistoverbodypadding,
'hipoverbodypadding':req.body.hipoverbodypadding,
 'shoes':req.body.shoes,
'dominanthand':req.body.dominanthand,
 'otheroverbodypadding':req.body.otheroverbodypadding,
 'measurementsTakenOn' : d.toLocaleDateString,
    
}});
    }
    else{
    var mesId = req.body.mesId; 
    var perfId = req.body.perfId;
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
    var measurementsTakenOn = d.toLocaleDateString();

    var newMeasure = new Model({
        mesId: mesId,
        perfId : perfId,
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
        otheroverbodypadding : otheroverbodypadding,
        measurementsTakenOn : measurementsTakenOn
        
    });
    
        Model.create(newMeasure, function (err, measure) {
            if (err) throw err;
        });
         return res.redirect('/') 
    }
     return res.redirect('/')
    
      })
    

      module.exports = api;
      