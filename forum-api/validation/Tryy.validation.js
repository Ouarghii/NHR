const isEmpty=require('./isEmpty');
const validator=require('validator')




module.exports=function Validateadclient(data){
    let errors={}
    data.email=!isEmpty(data.email) ?data.email:""
    data.name=!isEmpty(data.name) ?data.name:""
    data.cin=!isEmpty(data.cin) ?data.cin:""
    data.phone=!isEmpty(data.phone) ?data.phone:""

    data.status=!isEmpty(data.status) ?data.status:""
    if(!validator.isEmail(data.email)){
        errors.email="Format Email required"
    }
    if(validator.isEmpty(data.email)){
    errors.email="Required Email"
   }
   if(validator.isEmpty(data.name)){
    errors.name="Required Fullname"
   }
   if(validator.isEmpty(data.cin)){
    errors.cin="Required Cin"
   }
   if(validator.isEmpty(data.phone)){
    errors.phone="Required NumberPhone"
   }
   
   if(validator.isEmpty(data.status)){
    errors.status="Required status"
   }
   return {
    errors,
    isValid:isEmpty(errors)
   }
}