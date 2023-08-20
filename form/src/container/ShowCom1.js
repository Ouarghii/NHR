import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Row from "../components/Row";
import axios from "axios";
import uploadService1 from "./services/uploadService1";
function ShowCom1(){
    const [show, setShow] = useState(false);
    const[uploads,setUploads]=useState({})
    const fetchUploads=async()=>{
      setUploads(await uploadService1.getPosts()) 
    }
    const [message, setMessage] = useState("");

   
useEffect(()=>{
    fetchUploads()
},[])

console.log(uploads.data)



    return(
        <div>
            <h2>Justifications</h2>
            {/* {
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
            } */}
            <div className="container col-13 col-lg-7">
                {uploads.data !==undefined && uploads.data.data.length > 0 && (
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">email</th>
                  <th scope="col">message</th>                  
                  <th scope="col">File</th>                
                 
                </tr>
              </thead>
              <tbody>
                {uploads.data.data.map(({ email, messa, image,_id}) => (
                  <Row key={_id}
                    email={email}
                    messa={messa}                 
                    image={image}
                    Id={_id}
                                  
                    
                  />
                ))}
              </tbody>
            </table>
            )}
          </div>
        
        </div>
    )
}
export default ShowCom1;