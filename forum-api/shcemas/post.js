const mongoose=require('mongoose')

const postSchema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    cin:{
        type:String
    },
    phone:{
        type:String
    },
    status:{
        type:String
    },
    caract:[
        {
            adresse:{
                type:String
            },
            motivation:{
                type:String
            }
      
    }]
})
modules.exports=mongoose.model("Post",postSchema)