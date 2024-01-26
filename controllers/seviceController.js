const services = require('../Modals/serviceSchema')

exports.addservices = async(req,res)=>{
    
    const image = req.file.filename
    const {servicename,description,price,timerequires,subservice} = req.body
    
    try{
        const existing_service = await services.findOne({servicename,description})
        if(existing_service)
        {
            res.status(406).json('service is already exists')
        }
        else
        {
            const newservice = new services({
                servicename,
                description,
                price,
                timerequires,
                subservice,
                image
            })
            await newservice.save()
            res.status(200).json(newservice)
        }
    }
    catch(err){
        res.status(401).json(`request failed due to ${err}`)
    }
}

exports.allservices =async(req,res)=>{
    try{
        const allservices = await services.find()
        res.status(200).json(allservices)
    }
    catch(err){
        res.status(200).json(`authentication failed ...... due to ${err}`)
    }
}

exports.editservices = async(req,res)=>{
    const {id} = req.params
    const {servicename,description,price,timerequires,subservice} = req.body

    try{
        if(req.file)
        {
            const uploadedprojectimage = req.file.filename

            const updateservice =  await services.findByIdAndUpdate({_id:id},{servicename,description,price,timerequires,subservice,image:uploadedprojectimage},{new:true})

            await updateservice.save()
            res.status(200).json(updateservice)
        }
        else{
            const updateservice =  await services.findByIdAndUpdate({_id:id},{servicename,description,price,timerequires,subservice},{new:true})

            await updateservice.save()
            res.status(200).json(updateservice)
        }
        
        
    }
    catch(err){
        res.status(401).json(err)
    }
}

exports.deleteservices = async(req,res)=>{
    const {id} = req.params
    try{
        const removeservice = await services.findByIdAndDelete({_id:id})
        res.status(200).json(removeservice)
    }
    catch(err){
        res.status(401).json(err)
    }
}

exports.choosedservice =async(req,res)=>{
    const {id} = req.params
    try{
        const service = await services.find({_id:id})
        res.status(200).json(service)
    }
    catch(err){
        res.status(200).json(`authentication failed ...... due to ${err}`)
    }
}