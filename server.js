//const
require('dotenv').config();

const express = require('express');
const app = express();
const server = require('http').Server(app);
const cors =require('cors')
const bodyParser = require('body-parser');
const socket = require('./socket');
const db = require('./db');
const router = require('./network/routes');

const port = process.env.PORT;
//server
db(process.env.MONGODB);
//cors
app.use(cors());
//app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

socket.connect(server);
router(app);

app.use('/app', express.static('public'));
//listen
server.listen(port, () => {
    console.log('Desde http://localhost:' + port);
});
