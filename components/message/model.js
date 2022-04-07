//CONST
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//SCHEMA
const messageSchema = new Schema({
    chat: {
        type: Schema.ObjectId,
        ref: "Chat",
        required: true,
    },

    user: {
        type: Schema.ObjectId,
        ref: "User",
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    file: {
        type: String,
        required: false,
    }
});
//JSON
messageSchema.methods.toJSON = function () {
    const {__v, _id, ...message } = this.toObject();
    message.id = _id;
    return message;
};
//EXPORTS
const model = mongoose.model('Mensage', messageSchema);
module.exports = model;