require("dotenv").config()
const mongoose = require("mongoose");
const Room = require("../models/Rooms");

const rooms = [
    {
        room: "Room 1",
        user:[]
    },
    {
        room: "Room 2",
        user:[]
    },
    {
        room: "Room 3",
        user:[]
    },
    {
        room: "Room 4",
        user:[]
    },
    {
        room: "Room 5",
        user:[]
    },
    {
        room: "Room 6",
        user:[]
    },
]

mongoose.connect(process.env.DBURL, {useNewUrlParser: true})
.then(() => {
    console.log("Monog connect");
    return Room.deleteMany();
})
.then(() => Room.insertMany(rooms))
.then(rooms => {
    console.log(rooms);
    mongoose.connection.close();
})
.catch(err => {
    console.log(err);
    mongoose.connection.close();
})