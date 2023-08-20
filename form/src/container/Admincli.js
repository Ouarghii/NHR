import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Admincli() {
    const[email,setEmail] = useState('')
    const[name,setName] =useState('')
    const[cin,setCin] =useState('')
    const[phone,setPhone] =useState('')
    const[status,setStatus] =useState('')
   
    
    const addToList=()=>{
       axios.post('http://localhost:3000/insert',{
        Email:email,
        FullName:name,
        Cin:cin,
        PhoneNumber:phone,
        status:status
    })
    }
  return (
    <div style={{display:'flex',textAlign:'center'}}>
        <h2 style={{color:'black',textAlign:'center'}} >Clients</h2>
        
        <form>
        <label style={{color:'black'}}>Email:</label>
        <br/>
        <br/>
        <input type='text' onChange={(e)=>{
            setEmail(e.target.value)
        }}/>
        
        <label style={{color:'black'}}>Name:</label>
        <br/>
        <br/>
        <input type='text' onChange={(e)=>{
            setName(e.target.value)
        }}/>
        
        <label style={{color:'black'}}>Cin:</label>
        <br/>
        <br/>
        <input type='text' onChange={(e)=>{
            setCin(e.target.value)
        }}/>
        <label style={{color:'black'}}>Phone number:</label>
        <br/>
        <br/>
        <input type='text' onChange={(e)=>{
            setPhone(e.target.value)
        }}/>
        <label style={{color:'black'}}>status:</label>
        <br/>
        <br/>
        <input type='text' onChange={(e)=>{
            setStatus(e.target.value)
        }}/>
        <br/>
        <br/>
        <button  onClick={addToList}>Ajouter clients</button>
        </form>
        
    </div>
  )
}

export default Admincli