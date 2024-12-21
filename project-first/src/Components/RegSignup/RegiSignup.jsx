import React, { useState } from 'react'
import "./RegiSignup.css"
import user_icon from'../Assests/person.png'
import email_icon from'../Assests/email.png'
import password_icon from '../Assests/password.png' 

const RegiSignup = () => {

    const[action,setAction] = useState("Registration");
  return (
    <div className = 'container'>
        <div className= "header">
        <div className= "text"> {action}</div>
        <div className = "underline"></div>
        </div>

        <div className= "inputs">
            {action==="Login"?<div></div>:
            <div className= " inputs">
            <img src ={user_icon} alt=""/>
            <input type="text" placeholder='Name'/>
        </div>} 
        </div>

        <div className= "inputs">
            <div className= " inputs">
                <img src ={email_icon} alt=""/>
                <input type="email" placeholder='Email'/>
            </div>
        </div>

        <div className= "inputs">
            <div className= " inputs">
                <img src ={password_icon} alt=""/>
                <input type="password" placeholder='password'/>
            </div>
        </div>

        
        <div className="fogot-password">Lost password? <span>Click here</span></div>
        <div className="submit-container">
            <div className="submit">Registration</div>
            <div className="submit">Login</div>
        </div>
    </div>
  )
}

export default RegiSignup;