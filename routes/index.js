const express = require('express')
const router = express.Router()

router.get('/', (request, response, next) => {
    response.render('Homepage.ejs')
})

router.get('/home', (request, response, next) => {
    response.render('Homepage.ejs')
})

router.get('/basic', (request, response, next) => {
    response.render('Basic_info.ejs')
})

router.get('/Signup_Login', (request, response, next) => {
    response.render('SIgnup_Login.ejs')
})
module.exports = router