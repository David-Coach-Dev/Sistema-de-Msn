//const
const express = require('express');
const bodyParser= require('body-parser');
require('dotenv').config();
const router = express.Router();
const port = process.env.PORT;
//server
var app = express();
app.use(bodyParser.json());
app.use(router);

//router
router.get('/msn', (req, res) => {
    res.send('Lista de msn');
});
router.post('/msn', (req, res) => {
    console.log(req.query);
    console.log(req.body);
    res.send('El msn '+ req.body.text +' a sido enviado.');
});
router.get('*', (req, res) => {
    res.send('Oh escoje bien la opciomn');
});
//listen
app.listen(port);
console.log('Escuyando desde http://localhost:'+port);

