//import mongoose
const mongoose = require('mongoose')

//creating userschema
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        min:[3,'must be atleast 3 characters']
    },
    phoneNumber:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error('invalid email')
            }
        }
    },
    password:{
        type:String,
        require:true
    },
    usertype:{
        type:String
    }

    
})

//create model
const users = mongoose.model("users",userSchema)

//exports model
module.exports = users