import { ThemeContext } from "./App";
import React, {useState,useContext} from "react";



export default function Home({user,logout}){
 return(
  <div className="welcome text-center" >
  <h2>Welcome, <span>Yahya</span></h2>
  <button onClick={logout} className="btn btn-danger">Logout</button>
</div>
 );
 
}
