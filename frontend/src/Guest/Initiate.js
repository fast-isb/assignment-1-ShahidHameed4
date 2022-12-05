import React from "react"
import { useLocation } from "react-router-dom"
import './initiate.css'
const Initiate = (props) => {
    const location = useLocation();
    const item=(location.state)
    // console.log(item.details.area)
    return(<>
        <div className="initiate-div">
            <img src={item.img} alt="" />
            <br /><br />
            <h1>{item.title}</h1>
            
            <h3> Price: {" "+item.desc}</h3>
            
            <br/><hr />
            <h3>Details</h3>
            <hr />
            <table class="table table-striped">
  <tbody>
    <tr>
      <th>Area</th>
      <td>{item.details.area}</td>
    </tr>

    <tr>
    <th>Purpose</th>
      <td>{item.details.purpose}</td>
    </tr>   

    <tr>
    <th>Type</th>
      <td>{item.details.type}</td>
    </tr>

    <tr>
    <th>Location</th>
      <td>{item.details.location}</td>
    </tr>

    <tr>
    <th>Bedroom</th>
      <td>{item.details.bedroom}</td>
    </tr>
    <tr>
    <th>Bath</th>
      <td>{item.details.bath}</td>
    </tr>
  </tbody>
</table>

<h4>Are you Intrested?</h4>
<hr />
<button type="button" class="btn btn-success">Whatsapp</button>
<br /> <br />
<button style={{display:"block" }} type="button" class="btn btn-primary">Call us</button>
        </div>
    </>)
}
export default Initiate;