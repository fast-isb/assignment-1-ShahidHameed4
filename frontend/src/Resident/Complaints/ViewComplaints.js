

import { Table } from "@nextui-org/react";
import { useEffect } from 'react';
import { useState } from 'react';
import Axios from 'axios';


function ComplaintStatus() {
  const [Complaint,setComplaint]=useState([]);
  useEffect(()=>{
    (async ()=>{

      Axios.get('http://54.250.167.22:5000/api/Complaint/get/abc@123g.com').then((response)=> {
        setComplaint(response.data);
        });

    })();

  },[]);
  


  return (
    <div>
    {(typeof Complaint[0]==='undefined')? (<p>  Loading... </p>): (
      <div>
    <Table
      aria-label="Example table with static content"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
    >
      <Table.Header>
        <Table.Column>Complaint ID</Table.Column>
        <Table.Column>Problem</Table.Column>
        <Table.Column>Status</Table.Column>
        <Table.Column> Comments </Table.Column>
      
      </Table.Header>
      <Table.Body>

      {Complaint.map((val,key)=>{
              key=val._id
            return (
              <Table.Row key={val._id}>
          <Table.Cell>{val.id}</Table.Cell>
          <Table.Cell>{val.problem}</Table.Cell>
          <Table.Cell>{val.status}</Table.Cell>
          <Table.Cell>{val.comments}</Table.Cell>

        </Table.Row>

            )})
          }

        
        
            
         
        
      </Table.Body>
    </Table>
    </div>
    )}

    </div>
  );
}
export default ComplaintStatus