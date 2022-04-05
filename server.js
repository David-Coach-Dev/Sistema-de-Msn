//const
require('dotenv').config();
const express = require('express');
const bodyParser= require('body-parser');
const response=require('./Netword/response')
const router = express.Router();
const port = process.env.PORT;
//server
var app = express();
app.use(bodyParser.json());
app.use(router);
//router
router.get('/msn', (req, res) => {
    console.log(req.headers);
    res.header({
        "custom-header":"nuestro valor personalizado",
    })
    response.success(req, res, 'Lista de msn', 200);
});
router.post('/msn', (req, res) => {
    console.log(req.query);
    if (req.query.error == 'ok') {
        response.error(req, res, 'error simulado', 400)
    } else {
        response.success(req, res, 'Creado corectamente', 200);
    }
});
router.get('*', (req, res) => {
    response.error(req, res, 'error. error. error', 400)
});
//listen
app.listen(port);
console.log('Escuyando desde http://localhost:'+port);

