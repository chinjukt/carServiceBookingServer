//import model
const users = require('../Modals/userSchema')

//import jwt 
const jwt = require('jsonwebtoken')

exports.register = async(req,res)=>{
    console.log('inside controller register function');
    //extract data from rquest body
    const {name,phoneNumber,email,password} = req.body
    try{    
        const existuser = await users.findOne({email})
        if(existuser){
            res.status(406).json('user already registered.... please login')
        }
        else{
            //create an object for the model
            const newuser = new users({
                name:name,
                phoneNumber:phoneNumber,
                email:email,
                password:password,
                usertype:'customer'
            })

            //store to db
            await newuser.save()

            //response
            res.status(200).json(newuser)
        }
    }
    catch(err){
        res.status(401).json(`Register request failed due to ${err}`);
    }

    
}


exports.login = async(req,res)=>{
    console.log('inside controller login function');
    const {email,password,usertype} = req.body
    try{    
        const existing_user = await users.findOne({email,password,usertype})
        console.log(existing_user);

        if(existing_user)
        {
            const token = jwt.sign({userid:existing_user._id},"supersecretkey123")
            res.status(200).json({existing_user,token,usertype})
        }
        else{
            res.status(406).json('incorect email or password')
        }
    }
    catch(err){
        res.status(401).json(`login failed due to ${err}`)
    }

}