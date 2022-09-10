const mongoose=require('mongoose')

const uploadSchema=mongoose.Schema({
    messa:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('Upload',uploadSchema)