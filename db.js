//CONST
const db = require('mongoose');
//CONNSCT DB
db.Promise = global.Promise;
async function connect(url) {
    
    await db.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('[dbConnect] -> Conectado con éxcito,');
}
//EXPORT
module.exports = connect;