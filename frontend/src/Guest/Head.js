import React from "react"
// import "./Head.css"
import { NavLink } from "react-router-dom"

const Head = () => {

 

    return (
        <div >
            <nav>
               <ul>
                 <li>
                   <NavLink className="abc" to="/guest/login">Login</NavLink>
                 </li>
                 <li>
                   <NavLink className="abc" to="/guest/search">Search</NavLink>
                 </li>
                 <li>
                   <NavLink className="abc" to="/guest/Contactus">Contact us</NavLink>
                 </li>
               </ul>
            </nav>
        </div>
    )
}

export default Head;