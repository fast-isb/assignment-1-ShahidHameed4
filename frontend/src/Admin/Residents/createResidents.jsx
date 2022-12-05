
import { Input, Grid, Button } from '@nextui-org/react'
import { useState } from 'react'
import Axios from 'axios'

function CreateResidents () {
  const [fname, setfname] = useState(0)
  const [lname, setlname] = useState(0)
  const [email, setemail] = useState(0)
  const [cnic, setCnic] = useState(0)
  const [age, setage] = useState(0)
  const [password, setpassword] = useState(0)

  const createResident = () => {
    Axios.post('http://54.250.167.22:5000/api/residents/create/', {

      fname,
      lname,
      email,
      age,
      cnic,
      password
    }).then(() => {
      console.log('Added to DB')
    })
  }

  return (
    <Grid.Container gap={11}>
      <Grid>
        <Input
          bordered
          labelPlaceholder='First name'
          onChange={(event) => { setfname(event.target.value) }}
          color='default'
        />
      </Grid>
      <Grid>
        <Input
          bordered
          labelPlaceholder='last name'
          onChange={(event) => { setlname(event.target.value) }}
          color='primary'
        />
      </Grid>
      <Grid>
        <Input
          bordered
          labelPlaceholder='age'
          onChange={(event) => { setage(event.target.value) }}
          color='primary'
        />
      </Grid>
      <Grid>
        <Input
          bordered
          labelPlaceholder='CNIC'
          onChange={(event) => { setCnic(event.target.value) }}
          color='default'
        />
      </Grid>
      <Grid>
        <Input
          bordered
          labelPlaceholder='email'
          onChange={(event) => { setemail(event.target.value) }}
          color='primary'
        />
      </Grid>
      <Grid>
        <Input
          bordered
          labelPlaceholder='password'
          onChange={(event) => { setpassword(event.target.value) }}
          color='primary'
        />

      </Grid>

      <Grid> <Button onClick={createResident} color='secondary' rounded flat> Create </Button></Grid>

    </Grid.Container>

  )
}
export default CreateResidents
