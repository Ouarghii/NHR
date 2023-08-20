const create=(req,res)=>{
    const payload=req.body.post
    
    const fieldAdresse=payload.filter(p=>p.adresse==='')
    if(fieldAdresse.length >0) {
        return res.status(200).json({
            message:'field adresse'
        })
    }else  {
        return res.status(200).json({
            message:'success'
        })
    }
    
}
module.exports={create}