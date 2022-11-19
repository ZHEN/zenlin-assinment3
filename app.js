// require('dotenv').config();
const { response } = require('express');
const express = require('express');

const app=express();
app.use(express.json());
// const User = require("./models/user");
const mongoose= require('mongoose');
const port= process.env.PORT || 9090



//middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json())


app.set('view engine', 'ejs')
app.use("", require("./routes/routes"))

//fetch username and password
// fetch('./mongodbcloud.json')
//     .then((datajson) => response.json())
//     .then((json) => console.log(json));
// var username = datajson.username
// console.log(username)
// Connect with Database
mongoose.connect("mongodb+srv://root:root123456@cluster0.th27tdt.mongodb.net/test").then(data=>{console.log('connection Success');
}).catch(err =>{
    console.log(err);
})//  fdJpAIm25UAJVpt1
// app.post("/api/save",(req,res)=>{
//    const user =new User({
//        name:req.body.name
//    })
//     user.save().then(data=>{
//         res.json({message:"success",data:data})
//     })
// })
// app.get("/api/get",(req,res)=>{
//     User.find().then(data=>{
//         res.json({message:"Success",data:data})
//     }).catch(err=>{
//         console.log(err)
//     })
// })

app.listen(port,()=>{
    console.log('server Running At Port' + port)
})