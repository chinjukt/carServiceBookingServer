const mongoose = require('mongoose')

const servicesSchema = mongoose.Schema({
    servicename:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },
    timerequires:{
        type:String,
        require:true
    },
    subservice:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    }
    
})

const services = mongoose.model('services',servicesSchema)

module.exports = services