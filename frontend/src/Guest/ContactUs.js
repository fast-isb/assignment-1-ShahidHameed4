import React, { useEffect } from "react";
import "./contactus.css";
import { useState } from "react";
import axios from "axios";
import data from "./data";

const ContactUs = () => {

  const [obj, setfeed] = useState({
    name: "",
    phone_number:"+92",
    concern: "",
  });

  // useEffect(()=>{
  //   phone_number
  // })

  const changehandle = (e) => {
    const { name, value } = e.target;
    let x={ ...obj, [name]: value };

    setfeed(x);
    console.log(e.target.value)
  };

  const clickHandel = () => {
    const dataa = {
      url: "http://54.250.167.22:5000/api/contactus/create",
      method: "POST",
      data: obj,
    };

    let namebool=obj.name=="";
    let phonebool=obj.phone_number.length!=14;
    let concernbool=obj.concern=="";
    
    if(namebool){
      alert("dont leave name input empty")
    }
    
    if(phonebool){
      alert("enter 11 digit phone number")
    }
    
    if(concernbool){
      alert("dont leave concern input empty")
    }



    if(!concernbool && !phonebool && !namebool){
          axios(dataa)
            .then((output) => {
              console.log(output);
            })
            .catch((error) => {
              console.log(error);
            });
    }
  };

  return (
    <>
      <div className="login-box">
        <div className="input-box">
        <h2 id="heading">Contact Us</h2>
          <input
            type="text"
            placeholder="Name"
            id="nameid"
            name="name"
            required minlength="0"
            value={obj.name}
            onChange={changehandle}
            data-testid="testid1"
          />
          <input
            type="text"
            placeholder="Phone Number"
            required minlength="0" maxlength="14"
            id="phoneid"
            pattern="[0-9\/]*"
            name="phone_number"
            // disabled
            value={obj.phone_number}
            onChange={changehandle}
            data-testid="testid2"
          />
          <textarea
            type="text"
            placeholder="Your Concern"
            id="concernid"
            name="concern"
            value={obj.concern}
            onChange={changehandle}
            data-testid="testid3"
          />
          <button id="buttonid" onClick={clickHandel}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactUs;