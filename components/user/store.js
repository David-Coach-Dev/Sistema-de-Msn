//CONST
const Model = require('./model');
//AÑADIR POST
function addUser(user) {
    const myUser = new Model(user);
    return myUser.save();
}

//MOSTRAR GET
async function getUser(filterName) {
    let filter = {};
    if (filterName !== null) {
        filter = { name: filterName };
    }
    const user = await Model.find(filter);
    return user;
}

//ACTUALIZAR PACTH
async function updateUser(id, name) {
    const foundUser = await Model.findById({
        _id: id
    });
    foundUser.name = name;
    const newUser = await foundUser.save();
    return newUser;
}
//ELIMINAR DELETE
async function removeUser(id) {
    return Model.deleteOne({
        _id: id
    });
}
//EXPORTS
module.exports = {
    add: addUser,
    list: getUser,
    update: updateUser,
    remove: removeUser
}