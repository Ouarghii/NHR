const Upload=require('../shcemas/upload.models')

const createPost = async (req,res)=>{
   try {
     
    const upload= new Upload({
        messa:req.body.messa,
        email:req.body.email,
        image:req.file.filename
     })
   const uploadData=await upload.save()
   res.status(200).send({success:true,msg:'Upload Data',data:uploadData})
   } catch (error) {
     res.status(400).send({success:false,msg:error.message})
   }
}

const getPosts=async(req,res)=>{
    try {
       const uploads=await Upload.find({})
       res.status(200).send({success:true,msg:'Uploads Data',data:uploads})
    } catch (error) {
        res.status(400).send({success:false,msg:error.message})
    }
}

module.exports={
   createPost,
   getPosts,
   
}