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
router.get('/online', (req, res) => {
    res.render('online')
})


module.exports = router