const tryy=require('./try')
const Validateadclient=require('../validation/tryy.validation')
const AddadClients = async(req,res,body)=>{
    const {errors,isValid}=Validateadclient(req.body);
    
    try{
        if (!isValid) {
            res.status(404).json(errors)
        } else  {
            await tryy.findOne({ email:req.body.email} ).then(async(exist)=>{
                if((exist)){
                    errors.email="Email Exist";
                    
                    res.status(404).json(errors);
                }
             
                else {
                    await tryy.findOne({ cin:req.body.cin} ).then(async(exist)=>{
                        if((exist)){
                            errors.cin="Cin Exist";
                            
                            res.status(404).json(errors);
                        } else {
                await tryy.create(req.body)
                res.status(201).json({message:'Client add with success'}) }
            })
        }
                })
        }
        
     }catch(error){console.log(error.message)}
}
const FindAlladClients = async(req,res,body)=>{
  try {
     const data=await tryy.find()
     res.status(201).json(data)
  } catch (error) {
    console.log(error.message)
  }
}
const FindSingleadClient = async(req,res)=>{
    try {
        const data=await tryy.findOne({_id:req.params.id})
        res.status(201).json(data)
     } catch (error) {
       console.log(error.message)
     }
}
const UpdateadClients = async(req,res,body)=>{
    const {errors,isValid}=Validateadclient(req.body);

    try {
        if (!isValid) {
            res.status(404).json(errors)
        } else {
        const data=await tryy.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
            )
        res.status(201).json(data)
        }
     } catch (error) {
       console.log(error.message)
     }
}

const DeleteadClients = async(req,res)=>{
    try {
        await tryy.deleteOne({_id:req.params.id})
        res.status(201).json({message:"client deleted with success"})
     } catch (error) {
       console.log(error.message)
     }
}
module.exports = {
    AddadClients,
    FindAlladClients,
    FindSingleadClient,
    UpdateadClients,
    DeleteadClients,
}