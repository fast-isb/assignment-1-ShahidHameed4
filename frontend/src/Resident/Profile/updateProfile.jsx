import { Card, Grid, Text, Button,useTheme, Row, Spacer} from "@nextui-org/react";
import Axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import {useNavigate} from "react-router-dom";

export default function UpdateProfile() {
  const [resident,setResident] =useState(0);
  const navigate = useNavigate();
  const [fname,setfname] =useState(0);
  const [lname,setlname] =useState(0);
  const [email,setemail] =useState(0);
  const [age,setage] =useState(0);
  const [password,setpassword] =useState(0);



    useEffect(()=>{
      (async ()=>{
        Axios.get('http://54.250.167.22:5000/api/residents/get/3600000000').then((response)=> {
          setResident(response.data);
          
          });})();},[]);

     const updateUser=()=>{
            Axios.put(`http://54.250.167.22:5000/api/residents/update/${resident.cnic}`,{password:password,fname: fname,lname:lname,age:age,email:email});
            navigate("/resident/profile");
         }

       const fieldCheck=()=>{
        if(fname===0){
          setfname(resident.fname);

        }
        if(lname===0){
          setlname(resident.lname);
        }
        if(email===0){
          setemail(resident.email);
        }
        if(password===0){
          setpassword(resident.password);
        }
        if(age===0){
          setage(resident.age);
        }
        updateUser();
       }
      
  return (


    <div>
    {(typeof resident.fname==='undefined' )? (<p>Loading Data...</p>):(
    <div>
     <h1>hello</h1>
          <Card css={{height:"auto",width:"auto",alignItems:"center"}}>
          <Card.Header>
            <h1>Modify Your Profile</h1>
          </Card.Header>
          <Card.Divider />
          <Card.Body >
           <input type="text" id="fname"  defaultValue={resident.fname}      
           onChange={(event)=> { setfname(event.target.value);}}   
            ></input>
           <Spacer y={0.5} />
           <input type="text" id="lname" defaultValue={resident.lname}
            onChange={(event)=> { setlname(event.target.value);}} 
            ></input>
           <Spacer y={0.5} />
           <input type="text" id="cnic" placeholder={resident.cnic} disabled></input>
           <Spacer y={0.5} />
           <input type="text" id="email" defaultValue={resident.email} 
            onChange={(event)=> { setemail(event.target.value);}} 
            ></input>
           <Spacer y={0.5} />
           <input type="text" id="age" defaultValue={resident.age} 
            onChange={(event)=> { setage(event.target.value);}} 
            ></input>
            <Spacer y={0.5} />
           <input type="text" id="password" placeholder= "Password"
            onChange={(event)=> { setpassword(event.target.value);}} 
            ></input>
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Row justify="flex-end">
            <Button auto color="secondary" rounded flat onClick={fieldCheck}>
              Save
            </Button>
            </Row>
          </Card.Footer>
        </Card> 

        </div>

      )}
      </div>
  );
}
