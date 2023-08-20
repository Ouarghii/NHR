import axios from 'axios'
import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import './RowDetails.css'

function RowwDetails({Email, Name, Phone, Status, Id, OnDelete}) {
 
  return (
    <tr>
    <th>{Email}</th>
    <td>{Name}</td>
    <td>{Phone}</td>
   
    <td>{Status}</td>
    <td className="gap__actions">
      <span className="badge1 bg-info">
        <Link to={`/boite/${Id}`} className="text-white">
          <i className="fas fa-edit"  style={{'font-size':'24px'}}></i>
        </Link>
      </span>

      <span className="badge bg-danger" onClick={()=>OnDelete(Id)}>
        <i className="fas fa-trash-alt" style={{'font-size':'20px'}}></i>
      </span>
      <span  className="badge">
        <Link to={`/view3/${Id}`}>
        <CgProfile style={{transform:'translateY(-80%)'}} size={'25px'}/>
        </Link>
      </span>
    </td>
  </tr>
  )
}

export default RowwDetails