import io from 'socket.io-client';

export class socketConfig{

    constructor(componentFn, room){
        this.componentFn = componentFn;
        this.socket = io("http://localhost:3000", {path:"/api/socket"});
        this.socket.emit('subscribe', room);
    
        // this.socket.emit('send message', {
        //     room,
        //     message: room
        // });
        this.socket.on('subasta!', function(data) {
            //display data.message
            console.log(data)
        });
    }


    newMessage = (msg, room) => {
        console.log(room)
        this.socket.emit("send message", {room, msg})
    }
}