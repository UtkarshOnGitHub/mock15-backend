const mongoose = require("mongoose")

const bookmarkSchema = new mongoose.Schema({
    ticketId:{type:mongoose.Schema.Types.ObjectId,ref:"ticket"},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user"}
})


const BookMarkModel = mongoose.model("bookmark" , bookmarkSchema)

module.exports = BookMarkModel