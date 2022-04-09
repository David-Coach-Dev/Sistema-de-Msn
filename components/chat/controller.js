//CONST
const { attachment } = require('express/lib/response');
const store = require('./store');
//FUNCTION
//AÑADIR POST
function addChat(users) {
    console.log(users)
    if (!users || !Array.isArray(users)) {
        console.error('[ChatController] -> Invalidad lista de usuarios');
        return Promise.reject('Invalid user list');
    };
    const chat = {
        users: users,
        date: new Date()
    };
    return store.add(chat);
};
//MOSTRAR LIST
function listChats(filterOp, op) {
    return store.list(filterOp, op);
};

/*//ACTUALIZAR PATCH
function updateMessage(id, message) {
    return new Promise(async (resolve, reject) => {
        if (!id || !message) {
            console.error('[MessageController] -> No hay id o mensaje');
            reject('Los datos son incorrectos')
            return false;
        }
        const result = await store.update(id, message);
        resolve(result);
    });
}
//ELIMINAR DELETE
function deleteMessage(id) {
    return new Promise(async (resolve, reject) => {
        if (!id) {
            console.error('[MessageController] -> No hay id');
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
}*/
//EXPORTS
module.exports =
{
    addChat,
    listChats
    //updateMessage,
    //deleteMessage
}