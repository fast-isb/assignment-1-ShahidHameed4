
import { Input, Grid, Button, Textarea } from '@nextui-org/react'
import { useState } from 'react'
import Axios from 'axios'


function CreateAnnouncements () {
  const [Description, setDesc] = useState(0)

  const createAnnoucement = () => {
    Axios.post('http://54.250.167.22:5000/api/Annoucement/create/', {

      desc: Description,
      addedBy: 'Admin'
    }).then(() => {
      console.log('Added to DB')
    })
  }

  return (
    <Grid.Container gap={10}>
      <Grid>
        <Input
          disabled
          bordered
          labelPlaceholder='ID'
          color='default'
        />
      </Grid>
      <Grid>
        <Input
          disabled
          bordered
          labelPlaceholder={(new Date()).toDateString()}
          color='primary'
        />
      </Grid>
      <Grid>
        <Input
          disabled
          bordered
          labelPlaceholder={(new Date()).getHours() + ' : ' + (new Date()).getMinutes()}
          color='primary'
        />
      </Grid>
      <Grid>
        <Input
          disabled
          bordered
          labelPlaceholder='Admin'
          color='primary'
        />
      </Grid>
      <Grid>
        <Textarea
          bordered
          color='primary'
          labelPlaceholder='Description'
          onChange={(event) => { setDesc(event.target.value) }}
        />
      </Grid>
      <Grid> <Button onClick={createAnnoucement} color='secondary' rounded flat> Create </Button></Grid>

    </Grid.Container>

  )
}
export default CreateAnnouncements
