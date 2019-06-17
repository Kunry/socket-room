const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    room: String,
    users: [{type:Schema.Types.ObjectId, res:"User"}]
},{
    timestamps:true
})

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;