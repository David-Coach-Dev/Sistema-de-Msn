//const
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT;
const db = require('./db');
const router = require('./network/routes');
//server
db(process.env.MONGODB);
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
router(app);
//APP
app.use('/app', express.static('public'));
//listen
app.listen(port);
console.log('Desde http://localhost:'+port);