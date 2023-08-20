import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import './RowDetails.css'

function Row({email, image, messa,Id}) {
 
  return (
    <tr>
    <th>{email}</th>
    <td>{messa}</td>
    <td><a href={image} download={image}>{image}</a>  </td>
   
    <td className="gap__actions">
    <span style={{transform:'translateY(360%)'}} className="badge1 bg-info">
        <Link to={`/clients/${Id}`} className="text-white">
          <i className="fas fa-edit" size={'50px'}></i>
        </Link>
      </span>

      
    </td>
    
  </tr>
  )
}

export default Row