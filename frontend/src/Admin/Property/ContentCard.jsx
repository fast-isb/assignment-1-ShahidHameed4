import { Card, Grid, Text, Button, Row,Input,Spacer, Container } from "@nextui-org/react";
import { useState } from 'react';
import Axios from 'axios';
export default function App() {
    const [desc,setDesc]=useState(0);
    const [type,settype]=useState(0);
    const [status,setStatus]=useState(0);
    const [blockN,setBlockN]=useState(0);

    const createHouse=()=>{
      Axios.post('http://54.250.167.22:5000/api/Property/create',{
        
         desc: desc,
         type:type,
         status:status,
         blockN:blockN
      }).then(()=>{
        console.log("Added to DB");
      })
    }

  return (
    <Container  css={{mw:"600px"}}  gap={5}>
        <Card>
          <Card.Header>
            <Text b>Add Property</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10" }}>
          <Input disabled underlined labelPlaceholder="ID"  css={{mw:"400px"}} initialValue="" />
             <Spacer y={1.5} />
             <Input clearable underlined labelPlaceholder="Block" onChange={(event)=> { setBlockN(event.target.value);}}  css={{mw:"400px"}}   initialValue="" />
             <Spacer y={1.5} />
             <Input clearable underlined labelPlaceholder="Type" onChange={(event)=> { settype(event.target.value);}}  css={{mw:"400px"}}  initialValue="" />
             <Spacer y={1.5} />
             <Input clearable underlined labelPlaceholder="Status" onChange={(event)=> { setStatus(event.target.value);}}  css={{mw:"400px"}}  initialValue="" />
             <Spacer y={1.5} />
             <Input clearable underlined labelPlaceholder="Description" onChange={(event)=> { setDesc(event.target.value);}}  css={{mw:"400px"}}  initialValue="" />
             <Spacer y={1.5} />

          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Row justify="flex-end">
              <Button size="sm" light>
                Cancel
              </Button>
              <Button onClick={createHouse} size="sm">Create</Button>
            </Row>
          </Card.Footer>
        </Card>
      
      </Container>
  );
}
