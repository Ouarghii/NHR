import React, { Fragment, useState,useEffect } from "react";

function Post() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [cin, setCin] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");
  const [caract, setCaract] = useState([
    {
      adresse: "",
      errorAdresse:"",
      motivation: [],
    },
   
  ]);
  const[disable,setDisable]=useState(true) 

  useEffect(()=>{
    setDisableButton()
  })
const setDisableButton=()=>{
   const fieldAdresse=caract.filter(t=>t.adresse==='')
   const fieldMotivation =caract.filter(t=>t.motivation.some(s=>s.value===''))
   if (!fieldAdresse.length &&!fieldMotivation.length) {
     setDisable(false)
   } else {
    setDisable(true)
   }
}
  const addCarac = () => {
    setCaract([...caract, { adresse: "",errorAdresse:'',motivation:[] }]);
  };
  const remCarac = (e, i) => {
    const state = [...caract];
    state.splice(i, 1);
    setCaract(state);
  };
  const addChildren=(e,i)=>{
   const state=[...caract]
   state[i].motivation.push({ value:'',errorChildren:''}) 
   setCaract(state)
  }
 const minusMot=(e,indexParent,indexChildren)=>{
  const state=[...caract]
  state[indexParent].motivation.splice(indexChildren,1)
  setCaract(state)
 }
 const changeAdresse=(e,index)=>{
  const value=e.target.value
  const state=[...caract]
  state[index].adresse=value
  setCaract(state)
  if(value){
    const error=[...caract]
    error[index].errorAdresse=''
    setCaract(error)
  } else {
    const error=[...caract]
    error[index].errorAdresse='input caracteres'
    setCaract(error)
  }
 }
 const ChangeMotivation=(e,indexParent,indexChildren)=>{
  const value=e.target.value
  const state=[...caract]
  state[indexParent].motivation[indexChildren].value=value
  setCaract(state)
  if(value){
    const error=[...caract]
    error[indexParent].motivation[indexChildren].errorChildren=''
    setCaract(error)
  } else {
    const error=[...caract]
    error[indexParent].motivation[indexChildren].errorChildren='input motivation'
    setCaract(error)

  }
 }
 const submit =()=>{
  console.log('click!')
 }
  return (
    <div className="container" style={{ marginTop: "30px" }}>
      <div>
        <label style={{ color: "black" }}>Email:</label>
        <input className="form-control" />
        <label style={{ color: "black" }}>Name:</label>
        <input className="form-control" />
        <label style={{ color: "black" }}>Cin:</label>
        <input className="form-control" />
        <label style={{ color: "black" }}>Phone:</label>
        <input className="form-control" />
        <label style={{ color: "black" }}>Status:</label>
        <input className="form-control" />
        <label style={{ color: "black" }}>Caracteres:</label>
        <div className="row" style={{ marginBottom: "10px" }}>
        {caract.map((data, i) => {
          return (
            <Fragment key={i}>
                <div className="col-md-10">
                  <input className="form-control" value={data.adresse} onChange={(e)=>changeAdresse(e,i)}/>
                  {
                    data.errorAdresse &&(
                      <p className="text-danger">{data.errorAdresse}</p>
                    )
                  }
                </div>
                <br />
                <br />
                <div className="col-md-2">
                  {i === 0 ? (
                    <button
                      className="btn btn-primary"
                      style={{ justifyContent: "center", alignItems: "center" }}
                      onClick={addCarac}
                    >
                      +
                    </button>
                  ) : (
                    <button
                      className="btn btn-danger"
                      style={{ justifyContent: "center", alignItems: "center" }}
                      onClick={(e) => remCarac(e, i)}
                    >
                      -
                    </button>
                  )}
                </div>
                <br />
                <br />
                <div className="col-md-12" style={{padding:'10px 10px'}}>
                  <div className="row">
                    
                     {
                        data.motivation.map((motivation,indexChildren) =>{
                           return (
                            <Fragment key={indexChildren}>
                              <div className="col-md-12" style={{marginBottom:'10px'}}>
                                <div className="row">
                                <div className="col-md-auto">
                                  -
                                </div>
                              
                               <div className="col-md-10">
                               <input className="form-control" value={motivation.value} onChange={(e)=>ChangeMotivation(e,i,indexChildren)} /> 
                               {
                                motivation.errorChildren && (
                                  <p className="text-danger">{motivation.errorChildren}</p>
                                )
                               }
                               </div>
                               
                               <div className="col-md-auto">
                                 <button className="btn btn-danger" onClick={(e)=>{minusMot(e,i,indexChildren)}}> <i className="fa fa-minus"></i></button>
                              </div>
                                </div>
                              
                               </div>
/                            </Fragment>
                           
                           )
                        })
                     } 
                          <div className="col-md-12" style={{margin:'10px 10px'}}>
                            <button className="btn btn-primary" onClick={(e)=>addChildren(e,i)}>
                              + Sub Input
                            </button>
                          </div>
                        </div>
                      
                  
                </div>
            </Fragment>
          );
        })}
        </div>
      </div>
      <button className="btn btn-primary" disabled={disable} onClick={submit}>Submit</button>
    </div>
  );
}

export default Post;
