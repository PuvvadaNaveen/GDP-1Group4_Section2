const express = require('express')
const api = express.Router()
const Model = require('../models/employeeOption')
const mongoose = require('mongoose')
const db = mongoose.connection;



api.post('/emp01',  function (req, res) {
    
    console.log("hi");
    var selectEmployee1 = req.body.selectEmployee1;
    

    var newEmployeeOption = new Model({
        
        selectEmployee1: selectEmployee1
        
        
    });
    
        Model.create(newEmployeeOption, function (err, employeeOption) {
            if (err) throw err;
        });
        return res.redirect('/')
      })

      module.exports = api;
      