//CONST
const { populate } = require('./model');
const Model = require('./model');
//AÑADIR POST
function addChat(chat) {
    const myChat = new Model(chat);
    return myChat.save();
}
//MOSTRAR LIST
function listChats(filterOp, op) {
    return new Promise((resolve, reject) => {
        let filter = {};
        if (filterOp!==null && op == "u") {
            filter = { users: filterOp };
        }
        if (filterOp!==null && op == "c") {
            filter = { _id: filterOp };
        }
        Model.find(filter)
            .populate('users', 'name -_id' )
            .exec((error, populated) => {
                if (error) {
                    reject(error);
                    return false;
                }
                resolve(populated);
            })
    })
}
/*
//ACTUALIZAR PATCH
async function updateMessage(id, message) {
    const foundMessage = await Model.findById({
        _id: id
    });
    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}
//ELIMINAR DELETE
async function removeMessage(id) {
    return Model.deleteOne({
        _id: id
    });
}
*/
//EXPORTS
module.exports = {
    add: addChat,
    list: listChats,
    //update: updateMessage,
    //remove: removeMessage
}