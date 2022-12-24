const express = require("express")

const BookMarkModel = require("../models/bookmark.model");
const UserModel = require("../models/user.model");

const bookmark = express.Router()


bookmark.get("/",async(req,res)=>{
    let {token} = req.headers;
    token = token.split(":")
    let email = token[1]
    try {
        let user = await UserModel.find({email:email})
        let data = await BookMarkModel.find({userId:user[0].id}).populate("userId").populate("ticketId")
        res.status(200).send(data) 
    } catch (error) {
        console.log(error)
    }
})


bookmark.post("/",async(req,res)=>{
    let {ticket,token} = req.body;
    token = token.split(":")
    let email = token[1]
    try {
        let user = await UserModel.find({email:email})
        let data = new BookMarkModel({ticketId:ticket,userId:user[0].id})
        await data.save()
        res.status(200).send("Added To BookMark") 
    } catch (error) {
        console.log(error)
    }
})

module.exports = bookmark