//CONST
const store = require('./store');
//FUCTION
//AÑADIR POST
function addMessage(chat, user, message) {
    return new Promise((resolve, reject) => {
        if (!chat || !user || !message) {
            console.error('[MessageControler] -> No hay chat o usuario o mensaje');
            reject('Los datos son incorrectos')
            return false;
        };
        const fullMessage = {
            chat: chat,
            user: user,
            message: message,
            date: new Date()
        };
        store.add(fullMessage);
        resolve(fullMessage);
    });
}
//MOSTRAR GET
function getMessage(filterOp, op) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterOp, op));
    });
}
//ACTUALIZAR PACTH
function updateMessage(id, message) {
    return new Promise(async(resolve, reject) => {
        if (!id || !message) {
            console.error('[MessageControler] -> No hay chat o id o mensaje');
            reject('Los datos son incorrectos')
            return false;
        }
        const result = await store.update(id, message);
        resolve(result);
    });
}
//ELIMINAR DELETE
function deleteMessage(id){
    return new Promise(async (resolve, reject) => {
        if (!id) {
            console.error('[MessageControler] -> No hay id');
            reject('Id invalido')
            return false;
        }
        store.remove(id)
            .then(() => {
                resolve();
            })
            .catch(e => {
                reject(e);
            })
    });
}
//EXPORTS
module.exports =
{
    addMessage,
    getMessage,
    updateMessage,
    deleteMessage
}