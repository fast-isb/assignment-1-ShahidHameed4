

import { Input, Grid, Button, Textarea } from "@nextui-org/react";
import Axios from 'axios';
import { useState } from 'react';

function CreateComplaints() {
  const [hNo,sethno]=useState(0);
  const [problem,setProblem]=useState(0);
  const [desc,setDesc]=useState(0);

  const addComplaint=()=>{
    Axios.post('http://54.250.167.22:5000/api/Complaint/create/',{
      hNo: hNo,
      problem: problem,
      email: "abc@123g.com",
      desc: desc,
    }).then(()=>{
      console.log("Success");
    })
  }
    return (

    <Grid.Container gap={10}>
      <Grid>
        <Input 
          bordered 
          labelPlaceholder="House No" 
          color="default" 
          onChange={(event)=>{
            sethno(event.target.value);
          }}/>
          
      </Grid>
      <Grid>
        <Input 
          bordered 
          labelPlaceholder="Problem" 
          color="primary" 
          onChange={(event)=>{
            setProblem(event.target.value); }}
            />
      </Grid>
      <Grid>
        <Textarea
      
      bordered 
  
          color="primary" 
      
          labelPlaceholder="Description"
          onChange={(event)=>{
            setDesc(event.target.value);
          }}
        
        />
      </Grid>
      <Grid> <Button onClick={addComplaint} auto color="secondary" rounded flat> Submit </Button></Grid>
      
    </Grid.Container>
    
  );
}

  
  export default CreateComplaints;
  