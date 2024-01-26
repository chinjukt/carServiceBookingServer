const mongoose = require('mongoose')

const bookingSchema = mongoose.Schema({
    customername:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    phoneNumber:{
        type:String,
        require:true
    },
    bookeddate:{
        type:String,
        require:true
    },
    carname:{
        type:String,
        require:true
    },
    carnumber:{
        type:String,
        require:true
    },
    servicename:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },
    userid:{
        type:String,
        require:true
    },
    bookingstatus:{
        type:String,
        require:true
    }
    
})

const booking = mongoose.model('booking',bookingSchema)

module.exports = booking