const express = require("express")

const UserModel = require("../models/user.model")

const user = express.Router()


user.post("/signup" , async(req,res)=>{
    const {name,email,password} = req.body;
    let check = await UserModel.find({email:email})
    console.log(check)
    if(check.length!=0){
        res.status(409).send("Cannot Create two User With same Email ");
        return;
    }
    try {
        const newUser = new UserModel({name,email,password})
        await newUser.save()
        res.send("User Created")
    } catch (error) {
        console.log(error)
    }
})

user.post("/login" , async(req,res)=>{
    const {name,email,password} = req.body;  
    try {
        let data = await UserModel.find({email:email,password:password})
        console.log(data)
        if(data.length!=0){
            res.send({token:`${data[0].name}:${data[0].email}:ticket`,message:"Logged In"})
        }else{
            res.status(400).send("Invalid Credential")
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports = user