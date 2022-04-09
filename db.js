//CONST
const db = require('mongoose');
//CONNECT DB
db.Promise = global.Promise;
async function connect(url) {
    
    await db.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('[dbConnect] -> Conectado con excito,');
}
//EXPORT
module.exports = connect;