import React, { useEffect, useState } from 'react'
import InputGroup from '../components/InputGroup';
import uploadService from './services/uploadService';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
const View = (upload) => {
    const [messa,setMessa]=useState('')
    const[image,setImage]=useState('')
    const[email,setEmail]=useState('')
    const[message,setMessage]=useState('')
    const [pdfFile,setPdfFile]=useState(null)
    const[pdfFileError,setPdfFileError]=useState('')
    const [viewPdf,setViewPdf]=useState(null)
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate()
    const {id}=useParams()
    
    const onSubmitHandler=async(e)=>{
       e.preventDefault () 
      const formData= new FormData()
      formData.append('messa',messa)
      formData.append('email',email)
      formData.append('image',image)
     
     const response= await uploadService.create(formData)
     console.log(response)
    

    };
   
  return (
    <div>
        <h3 style={{textAlign:'center',marginTop:'20px'}}>Justification</h3>
        <form className='form' onSubmit={onSubmitHandler} action="" method="post" style={{background:'black',marginTop:'50px'}}>
              
              <br/>
              <input type="file" name='image' className='grp' onChange={e=>setImage(e.target.files[0])} required/>
              <br/>
              <br/>
              <label>Email</label>
              <br/>
              <textarea name='email' style={{transform:'translateY(30px)',marginBottom:'80px'}} onChange={e=>setEmail(e.target.value)} required></textarea>
              <br/>
              <br/>
              <label>Pourquoi tu veut changer le status de ce clients?</label>
              <br/>
              <textarea name='messa' style={{transform:'translateY(30px)',marginBottom:'80px'}} onChange={e=>setMessa(e.target.value)} required></textarea>
              
              <button type='submit' className='btn-success btn-lg'>Upload File</button>

              
        </form>
      
        
    </div>
  )
}

export default View