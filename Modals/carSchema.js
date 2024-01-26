const mongoose = require('mongoose')

const carschema = mongoose.Schema({
    carname:{
        type:String,
        require:true
    }
})

const cars = mongoose.model("cars",carschema)

module.exports = cars