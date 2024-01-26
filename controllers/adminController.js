const cars = require('../Modals/carSchema')

exports.addcar = async(req,res)=>{
    console.log('inside addcar function');
    const {carname} = req.body
    try{
        const existcar = await cars.findOne({carname})
        if(existcar)
        {
            res.status(406).json('car is already exists')
        }
        else{
                const newcar = new cars({
                    carname:carname
                })
                await newcar.save()
                res.status(200).json(newcar)
            }
    }
    catch(err){
        res.status(401).json(`car adding request failed due to ${err}`);
    }
}

//show all cars
exports.showcars = async(req,res)=>{
    try{
        const allcars = await cars.find()
        res.status(200).json(allcars)
    }
    catch(err){
        res.status(401).json(`request failed due to ${err}`);
    }
}

//delete car
exports.deletecar = async(req,res)=>{
    const {id} = req.params
    try{
        const removecar = await cars.findByIdAndDelete({_id:id})
        res.status(200).json(removecar)
    }
    catch(err){
        res.status(401).json(err)
    }
}

