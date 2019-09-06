'use strict'
require('dotenv').config()

// Routes on website
const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.render('home')
})

router.get('/multi', (req, res) => {
    res.render('multi')
})


module.exports = router