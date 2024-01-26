const jwt = require('jsonwebtoken')

const jwtMiddleware = (req,res,next)=>{
    console.log('inside jwtmiddleware');
    const token = req.headers['authorization'].split(' ')[1]
    console.log(token);

    try{
        const jwtResponse = jwt.verify(token,"supersecretkey123")
        console.log(jwtResponse);
        req.payload=jwtResponse.userid
        next()
    }
    catch{
        res.status(401).json('Authorization failed ..... please Login')
    }
}
module.exports = jwtMiddleware