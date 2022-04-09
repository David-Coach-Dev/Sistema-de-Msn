//CONST
const store = require('./store');
//FUCTION
//AÑADIR POST
function addUser(name) {
    if (!name) {
        console.error('[UsuerController] -> No hay usuario o mensaje');
        return Promise.reject('Invalido user')
    };
    const user = {
        name: name,
        date: new Date()
    };
    return store.add(user);
};

//MOSTRAR GET
function getUser(filterName) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterName));
    });
}
//ACTUALIZAR PACTH
function updateUser(id, name) {
    return new Promise(async (resolve, reject) => {
        if (!id || !name) {
            console.error('[UserController] -> No hay id o mensaje');
            reject('Los datos son incorrectos')
            return false;
        }
        const result = await store.update(id, name);
        resolve(result);
    });
}
//ELIMINAR DELETE
function deleteUser(id) {
    return new Promise(async (resolve, reject) => {
        if (!id) {
            console.error('[UserControler] -> No hay id');
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
    addUser,
    getUser,
    updateUser,
    deleteUser
}