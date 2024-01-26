//import dotenv
require("dotenv").config()

//import express
const express = require("express")

//import cors
const cors = require("cors")

//import router
const router = require('./routing/router')

//import connection.js
require('./DB/connection')

//create server
const carserver = express()

//use of cors by server
carserver.use(cors())



//parsing json
carserver.use(express.json())

//use router
carserver.use(router)

//use of upload folder
carserver.use('/uploads',express.static('./uploads'))

//customize port
const PORT = 4000 || process.env

//run server
carserver.listen(PORT,()=>{
    console.log(`server running successfully at ${PORT}`);
})

//get request
// carserver.get('/',(req,res)=>{
//     res.send(`<p>car server running successfully and ready for client request</p>`)
// })