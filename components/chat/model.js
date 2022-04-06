//CONST
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//SCHEMA
const chatSchema = new Schema({
    users:[
        {
            type: Schema.ObjectId,
            ref: "User",
        },
    ],
    date: {
        type: Date,
        required: true,
    },
});
//JSON
chatSchema.methods.toJSON = function () {
    const { __v, _id, ...chat} = this.toObject();
    chat.id = _id;
    return chat;
};
//EXPORTS
const model = mongoose.model('Chat', chatSchema);
module.exports = model;