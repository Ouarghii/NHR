import { useState,useEffect } from "react";
import uploadService from "./services/uploadService";
function ShowCom(){
    
    const[uploads,setUploads]=useState({})
    const fetchUploads=async()=>{
      setUploads(await uploadService.getPosts()) 
    }


useEffect(()=>{
    fetchUploads()
},[])

console.log(uploads.data)



    return(
        <div>
            <h2>Justifications</h2>
            {
              uploads.data !==undefined && uploads.data.data.length > 0 && (
                    <table style={{width:'100%'}} border='1'>
                        <thead>
                            <tr>
                            <th style={{textAlign:'center'}}>Email</th>
                            <th style={{textAlign:'center'}}>Message</th>
                            <th style={{textAlign:'center'}}>File</th>
                            </tr>
                        </thead>
                        <tbody>
                           
                            {   uploads.data.data.map((post)=>{
                                    <tr>
                                        
                                        <td>{post.email}</td>
                                        
                                        <td>{post.messa}</td>
                                        <td>{post.image}</td>
                                    </tr>
                                })
                            }
                            
                        </tbody>
                    </table>
                )
            }
        </div>
    )
}
export default ShowCom;