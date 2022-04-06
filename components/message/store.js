//CONST
const Model = require('./model');
//AÑADIR POST
function addMessage(message) {
    const myMessage = new Model(message);
    myMessage.save();
}
//MOSTRAR GET
async function getMessage(filterOp, op) {
    return new Promise((resolve, reject)=>{
        let filter = {};
        if (filterOp !== null && op=="u") {
            filter = { user: filterOp };
        }
        if (filterOp !== null && op=="c") {
            filter = { chat: filterOp };
        }
        console.log(filter);
        Model.find(filter)
            .populate('user', 'name')
            .exec((error, populated) => {
                if (error) {
                    reject(error);
                    return false;
                }
                resolve(populated);
            })
    })
}
//ACTUALIZAR PACTH
async function updateMessage(id, message) {
    const foundMessage = await Model.findById({
        _id: id
    })
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
//EXPORTS
module.exports = {
    add: addMessage,
    list: getMessage,
    update: updateMessage,
    remove: removeMessage
}