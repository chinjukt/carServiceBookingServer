const booking = require('../Modals/bookingSchema')

exports.addbooking = async(req,res)=>
{
    const userid = req.payload
    const {customername,address,phoneNumber,bookeddate,carname,carnumber,servicename,price,bookingstatus} = req.body
    try{
        //booking status {pending,accepted,rejected,cancelled}
        const newbooking = new booking({
            customername,
            address,
            phoneNumber,
            bookeddate,
            carname,
            carnumber,
            servicename,
            price,
            userid,
            bookingstatus
        })
        await newbooking.save()
        res.status(200).json(newbooking)
    }
    catch(err){
        res.status(401).json(`request failed due to ${err}`)
    }
}

exports.userbookings = async(req,res)=>{
    try{
        const userid = req.payload
        const userbooking = await booking.find({userid})
        res.status(200).json(userbooking)
    }
    catch(err){
        res.status(200).json(`authentication failed ...... due to ${err}`)
    }
}

exports.editstatus = async(req,res)=>{
    const {id} = req.params
    const {bstatus} = req.body

    try
    {
            const updatestatus =  await booking.findByIdAndUpdate({_id:id},{bookingstatus:bstatus},{new:true})

            await updatestatus.save()
            res.status(200).json(updatestatus)
            
    }
    catch(err){
        res.status(401).json(err)
    }

}


exports.allbookings = async(req,res)=>{
    const searchkey = req.query.search
    console.log(searchkey);
    const query = {
        customername:{
            $regex:searchkey,$options:'i'
        }
    }
    try{
        const allorders = await booking.find(query)
        res.status(200).json(allorders)
    }
    catch(err){
        res.status(200).json(`authentication failed ...... due to ${err}`)
    }
}