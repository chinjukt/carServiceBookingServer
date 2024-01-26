// import mongoose
const mongoose = require("mongoose")

//get the connection string
const connectionstring = process.env.DATABASE

//connect node.js/server with mongodb
mongoose.connect(connectionstring).then(()=>{
    console.log('server connected successfully with mongodb');
}).catch((err)=>{
    console.log(`something went wrong ${err}`);
})