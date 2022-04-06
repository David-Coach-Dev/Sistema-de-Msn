const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//SCHEMA
const UsuarioSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        require: true
    },
});
//JSON
UsuarioSchema.methods.toJSON = function () {
    const { __v, _id, ...usuario } = this.toObject();
    usuario.id = _id;
    return usuario;
}
//EXPORTS
const model = mongoose.model('User', UsuarioSchema);
module.exports = model;