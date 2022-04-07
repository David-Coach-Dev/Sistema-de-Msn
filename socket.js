//CONST
const socketIO = require('socket.io');
const socket = {};
//CONNECT
function connect(server) {
    socket.io=socketIO(server);
};
//EXPORT
module.exports = {
    connect,
    socket,
}