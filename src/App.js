import React,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './home';
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
   email : "admin@gmail.com",
   password : "admin"
 }
 const [user,setUser] = useState({email : "",password: ""})
 const [error,setError] = useState("")
 const [emailError,setEmailError] = useState("")
 const [passwordError,setPasswordError] = useState("")
 const [isOpen, setIsOpen] = useState(false)
 const Login = (details) =>{
  if(details.email == adminUser.email && details.password==adminUser.password){
   setUser({email : details.email,password : details.password})
      
  }
   else if(!details.email && !details.password){
      setEmailError("Email should not be empty")
      setPasswordError("Password should not be empty")
      setError('')
    }
  else  if(!details.email){
      setEmailError("Email should not be empty")
      setPasswordError("")
      setError('')
    }
    else if(!details.password){
      setEmailError("")
      setError('')
        setPasswordError("Password should not be empty")
    }
  
  else{
    setEmailError("")
    setPasswordError("")
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
              <Loggin login={Login} error={error}  open={isOpen} onClose={() => setIsOpen(false)} customText={'Sign in'} emailError={emailError} passwordError={passwordError}/>
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