import React from "react"
// import "./Head.css"
import { NavLink } from "react-router-dom"

const Head = () => {

 

    return (
        <div >
            <nav>
               <ul>
                 <li>
                   <NavLink className="abc" to="/resident">Resident</NavLink>
                 </li>
                 <li>
                   <NavLink className="abc" to="/admin">Admin</NavLink>
                 </li>
                 <li>
                   <NavLink className="abc" to="/guest">Guest</NavLink>
                 </li>
               </ul>
            </nav>
        </div>
    )
}

export default Head;