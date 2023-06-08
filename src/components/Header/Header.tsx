import React from 'react';
import "./Header.css";
export default function Header() {
  return (
    
    <div style={{ display: "flex", flexDirection: "row", height:"7vh", width:"100%", alignItems:"center", marginTop:"5px"}}>
        <img src={require("./leaf.png")} alt="" style={{height:"35px", width:"35px", marginLeft:"35px"}}/>
        <b style={{margin:"10px", fontSize:"20px"}}>Authentify</b>
        <button className="custom-btn btn-6" style={{marginLeft:"auto", marginRight:"10px"}}>Learn More!</button>
    </div>
  );
}
