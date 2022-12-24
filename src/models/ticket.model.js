const mongoose = require("mongoose")

const ticketSchema = new mongoose.Schema({
    category:{type:String},
    title:{type:String},
    message:{type:String},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
},{
    timestamps:true
})


const TicketModel = mongoose.model("ticket" , ticketSchema)

module.exports = TicketModel