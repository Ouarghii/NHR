import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import './RowDetails.css'
import {CgProfile} from 'react-icons/cg'
function RowDetails({Email, Fullname, Cin,NumberPhone,Profession, status, Id, OnDelete}) {
 
  return (
    <tr>
    <th>{Email}</th>
    <td>{Fullname}</td>
    <td>{Cin}</td>
    <td>{NumberPhone}</td>
    <td>{Profession}</td>
    <td>{status}</td>
    <td className="gap__actions">
      <span style={{transform:'translateY(316%)'}} className="badge1 bg-info">
        <Link to={`/clients/${Id}`} className="text-white">
          <i className="fas fa-edit"  style={{'font-size':'24px'}}></i>
        </Link>
      </span>

      <span style={{transform:'translateY(270%)'}} className="badge bg-danger" onClick={()=>OnDelete(Id)}>
        <i  className="fas fa-trash-alt" style={{'font-size':'20px'}}></i>
      </span>
      <span  className="badge">
        <Link to={`/view/${Id}`}>
        <CgProfile style={{transform:'translateY(-60%)'}} size={'25px'}/>
        </Link>
      </span>
      
    </td>
  </tr>
  )
}

export default RowDetails