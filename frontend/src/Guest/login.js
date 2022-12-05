import React from "react"
import Search from "./Search"
import "./login.css"
import {Link} from 'react-router-dom'

const Login = () => {

 

    return (
        <div className="login">
            <h1>Login</h1>
            <input data-testid="testid1" type="text"  placeholder="Enter your Email"></input>
            <input data-testid="testid2" type="password" placeholder="Enter your Password" ></input>
            <br/><br/>
            <Link to="/search" className="button">Login</Link>
            
            {/* <div>or</div>
            <div className="button">Register</div> */}
        </div>
    )
}

export default Login