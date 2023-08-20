const express=require('express')
const uploadroute=express.Router()
const bodyParser=require('body-parser')
uploadroute.use(bodyParser.json())
uploadroute.use(bodyParser.urlencoded({extended:true}))

const multer=require('multer')
const path =require('path')

uploadroute.use(express.static('public'))

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,'../public/images'),function(error,success){
            if(error){
                console.log(error)
            }
        })
    },
    filename:function(req,file,cb){
       const name=file.originalname
       cb(null,name,function(error,success){
        if(error){
            console.log(error)
        }
       })
    }
})

const upload=multer({storage:storage})

const uploadController=require('../shcemas/uploadControllers')

uploadroute.post('/view',upload.single('image'),uploadController.createPost)
 
uploadroute.get('/getjustfy',uploadController.getPosts)

module.exports=uploadroute