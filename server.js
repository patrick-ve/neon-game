/* eslint-disable no-undef */
/* eslint-disable no-console */
'use strict'
require('dotenv').config()

// NODE MODULES
const express = require('express');
// const server = require('http').createServer(app);
// const io = require('socket.io')(server);
const app = express();
const exphbs = require('express-handlebars')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

// VARIABLES
const port = process.env.PORT || 5000

// ROUTES
const pageRoutes = require('./routes/pages')

// MIDDLEWARE
app
	.use(bodyParser.urlencoded({ extended: false }))
	.use(express.json())
	.use('/', pageRoutes)
	.use(express.static(__dirname + '/public'))
	.use(cookieParser())
	.engine('.hbs', exphbs({ extname: '.hbs', defaultLayout: 'main', partialsDir: __dirname + '/views/partials/' }))
	.set('view engine', 'hbs')
	.get('*', (req, res) => {
		res.render('404')
	})


// io.on('connection', () => { /* … */ });

app.listen(port);