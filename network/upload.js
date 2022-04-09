const multer = require('multer');
const path = require('path');
const mime = require('mime');

// Creamos las opciones
const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/files'), // <= si no existe, multer la creará
    filename: function (req, file, cb) {
        let ext = path.extname(file.originalname);
        ext = ext.length > 1 ? ext : '.' + mime.extension(file.mimetype);
        const fileName = chat + '-' + user + ext;
        console.log('filename: ', fileName); // <= vemos el resultado
        cb(null, fileName);
    }
});

const upload = multer({ storage: storage }); // <= aquí asignamos las opciones

module.exports = upload; // <= exportamos el módulo