import React from 'react'
import Entete from '../components/Entete'
import Wlcm from './Wlcm'
import clientI from'../assets/contrat.jpg'
import Entre from'../assets/entreprise.jpg'
import Four from '../assets/fournisseur.jpg'
import Boite from '../assets/Boite.jpg'
import Plus from '../assets/plus.png'
import {Link} from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import { margin } from '@mui/system'
function Wlcm1() {
  return (
    
    <div className='cards'>
        <div className='hello'>
        
        <h1 style={{
          
          alignItems:"center",
          color:"white",
          background: "linear-gradient(90deg,#6082B6, #7DF9FF, #40B5AD, #6F8FAF,#6495ED,#0047AB)",
          backgroundSize: "400%",
          fontFamily:" sans-serif",
          animation: "animate 10s linear infinite",
          backgroundClip: "text" ,height:"100px"
          
}}><HomeIcon style={{marginLeft:"50px"}} className="home"  onClick={()=>{
            window.location='/'
          }}/><div style={{fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}> <center>Bienvenue</center></div> </h1>
        </div>
      
    <div className=' container-fluid d-flex justify-content-center'style={{marginLeft:"20px"}} >
        
    
        <div className='row'>
        

            <div className='col-md-4'>
                <Wlcm imgsrc={clientI} title="Client:" btn="Personne Physique" link='http://localhost:3001/clients' txt="Personne qui achète un bien chez un commerçant, qui paie une société pour un service." />
            </div>
            <div className='card1 col-md-4 '>
                <Wlcm imgsrc={Entre} title="Entreprise:" btn="Personne Morale" link='http://localhost:3001/entreprise' txt=" est la plus petite combinaison d'unités légales qui constitue une unité organisationnelle de production de biens et de services jouissant d'une certaine autonomie de décision, notamment pour l'affectation de ses ressources courantes."/>
            </div>
            <div className='col-md-4'>
            <Wlcm imgsrc={Four} title="Fournisseur:" btn="Fournisseur" link='http://localhost:3001/fournisseurs' txt="est une personne ou une entreprise qui soit fabrique, transforme, emballe, ou installe des produits contrôlés, soit exerce des activités d'importation ou de vente de ces produits.
On parle souvent de relation client-fournisseur."/>
            </div>
            <div className='col-md-4'>
            <Wlcm imgsrc={Boite} title="Boite Informatique:" btn="Boite informatique" link='http://localhost:3001/boite' txt="est une société de développement informatique spécialisée dans le développement des logiciels sur-mesure, des sites web, des applications web et des applications mobile. Notre équipe s'est progressivement constituée pour réunir les meilleurs profils. "/>
            </div>
            <div className='col-md-4'>
            
            </div>
            
            <div className='col-md-4'>
            <Wlcm imgsrc={Plus} title="Autres Types:" btn="Autres" link="http://localhost:3001/autres" txt="c'est plusieurs types differents de ce qui précédes"/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Wlcm1