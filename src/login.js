import React, {useState} from 'react'

import ReactDom from 'react-dom'

export default function Loggin({login,error,open,onClose,customText}){
const [details,setDetails]= useState({email:"",password: ""});
const submitHandler = e=>{
    e.preventDefault();
    login(details)
}
const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
  }
  
  const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
  }
  
if (!open) return null
  return ReactDom.createPortal(
      <>
     
    <div style={OVERLAY_STYLES} >
    <div style={MODAL_STYLES}>
    <div className="card">
          <div className="card-body">
        <form onSubmit={submitHandler}>
        <div className="form-inner">
            <h3>{customText}</h3>    
            {(error!="") ?(<div className="error text-danger">{error}</div>): ""}
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input  className="form-control" type="text" email="email" id="email" onChange={e=>setDetails({...details,email: e.target.value})} value={details.email} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input  className="form-control" type="text" password="password" id="password" onChange={e=>setDetails({...details,password: e.target.value})} value={details.password}/>
            </div>
            <input type="submit" value="Log In"  className="btn btn-success" /><br/><br/>
            <button className="btn btn-danger" onClick={onClose}>Close Modal</button>
        </div> 
        
    </form>
    </div>
    </div>
    </div>
    </div>
    </>,
    document.getElementById('portal')
         );
        
 }
 





















 