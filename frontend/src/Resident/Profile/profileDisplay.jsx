import { Card, Grid, Text, Button,useTheme, Row, Spacer} from "@nextui-org/react";
import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Profile() {
  const navigate = useNavigate();

    const [resident,setResident] =useState(0);

    useEffect(()=>{
      (async ()=>{
        Axios.get('http://54.250.167.22:5000/api/residents/get/3600000000').then((response)=> {
          setResident(response.data);
          });})();},[]);
    

  return (

    <div>
    {(typeof resident.fname==='undefined' )? (<p>Loading Data...</p>):(
    <div>
     <h1></h1>
          <Card css={{height:"auto",width:"auto",alignItems:"center"}}>
          <Card.Header>
            <h1>Profile Details</h1>
          </Card.Header>
          <Card.Divider />
          <Card.Body >
           <input type="text" id="fname" placeholder={resident.fname} disabled></input>
           <Spacer y={0.5} />
           <input type="text" id="lname" placeholder={resident.lname} disabled></input>
           <Spacer y={0.5} />
           <input type="text" id="cnic" placeholder={resident.cnic} disabled></input>
           <Spacer y={0.5} />
           <input type="text" id="email" placeholder={resident.email} disabled ></input>
           <Spacer y={0.5} />
           <input type="text" id="age" placeholder={resident.age} disabled></input>
           <Spacer y={0.5} />
          
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Row justify="flex-end">
            <Button onPress={()=>{
              navigate("/resident/edit");
            }} auto color="secondary" rounded flat>
              Update
            </Button>
            </Row>
          </Card.Footer>
        </Card> 
      </div>

      )}
      </div>
  );
}
