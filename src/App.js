import React,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './home';
import Modal  from "./Modal";
import Loggin from "./login";
import {Route,BrowserRouter as Router, Redirect, Switch} from 'react-router-dom'


export const ThemeContext = React.createContext();
function App() {
  

  const BUTTON_WRAPPER_STYLES = {
    position: 'relative',
    zIndex: 1
  }
  
  const OTHER_CONTENT_STYLES = {
    position: 'relative',
    zIndex: 2,
    backgroundColor: 'red',
    padding: '10px'
  }
  

 const adminUser = {
   email : "admin@hotmail.com",
   password : "admin"
 }
 const [user,setUser] = useState({email : "",password: ""})
 const [error,setError] = useState("")
 const [isOpen, setIsOpen] = useState(false)
 const Login = (details) =>{
  if(details.email == adminUser.email && details.password==adminUser.password){
   setUser({email : details.email,password : details.password})
      
  }else if(details.email == "" || details.password==""){
    setError('Fields should not be empty');
  }
  else{
    console.log("no logged In");
    setError('Login or password incorrect')
  }
 }
 const Logout = ()=>{
    setUser({email : "",password : ""})
    
    location.href= "/login"

 }
 return (
        <Router>
          <Switch>
          <Route path="/login" >
        <div className="App mt-5">
            {(user.email != "") ? (


            <Redirect to="/home"/>

            ):(
              <div style={BUTTON_WRAPPER_STYLES}>
              <button className="btn btn-success" onClick={() => setIsOpen(true)}>Sign in</button>
              <Loggin login={Login} error={error}  open={isOpen} onClose={() => setIsOpen(false)} customText={'Sign in'} />
              </div>
            )}
        </div>
        </Route>
        <Route path="/home">
              <Home user={user} logout={Logout}/>
        </Route>
   </Switch>
  
   </Router>
 )
}
export default App;