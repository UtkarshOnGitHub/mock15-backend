const mongoose = require("mongoose")
const express = require("express")

const TicketModel = require("../models/ticket.model");
const UserModel = require("../models/user.model");

const ticket = express.Router();


ticket.get("/" , async(req,res)=>{
    let {token} = req.headers;
    token = token.split(":")
    let email = token[1]
    try {
        let user = await UserModel.find({email:email})
        let data = await TicketModel.find({userId:user[0].id}).populate("userId")
        res.status(200).send(data)  
    } catch (error) {
        console.log(error)
    }
})

ticket.post("/" , async (req,res)=>{
    let {token} = req.headers;
    const {category,title,message} = req.body
    token = token.split(":")
    let email = token[1];
    let data = await UserModel.find({email:email})
    let userId = data[0].id
    try {
        let data = new TicketModel({category:category,title:title,message:message,userId:userId})
        await data.save()
        res.send("Ticket Created")
    } catch (error) {
        console.log(error)
    }
    
})

module.exports = ticket