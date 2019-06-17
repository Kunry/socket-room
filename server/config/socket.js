const Room = require("../models/Rooms");
module.exports = (server, url) => {

const io = require('socket.io')(server, {path:url});

// Room.find().select("room")
// .then(room => {
    // console.log(room)
    io.on("connection", (socket) => {
        console.log("Connect");

        socket.on('subscribe', function(room) {
            console.log('joining room', `${room.room} ${room.num}`);
            socket.join(`${room.room} ${room.num}`);
        });
        
        socket.on('send message', function({room, msg}) {
            console.log(room)
            console.log('sending room post', `${room.room} ${room.num}`);
            io.sockets.in(`${room.room} ${room.num}`).emit('subasta!', {
                message: msg.message || msg
            });
        });
    })
// })



}