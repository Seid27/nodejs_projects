const express = require('express');
const path = require('path')
const routes = require('./routes/index');
const bodyParser = require('body-parser');

const app = express(); //create an express app

//body-parser makes data available on the request body
//urlencoded method allows us to handle data sent as application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'pug')

app.use('/',routes); //direct all '/' pathes to routes

// serve static files such as images, JavaScript files and CSS files in Express using 
// the built-in express.static middleware function
 app.use(express.static('public'));

//we export our app variable so that it can beimported and used in other files.
module.exports = app; 
