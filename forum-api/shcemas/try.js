const mongoose=require('mongoose')

const TrySchema=new mongoose.Schema({
    email : String,
    name : String,
    cin : String,
    phone : String,
    status: String ,
    
})


module.exports=mongoose.model("Try",TrySchema)
