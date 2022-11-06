
import { Table } from '@nextui-org/react'
import { useEffect, useState } from 'react'

import Axios from 'axios'
function ViewAnnouncements () {
  const [Annoucement, setAnnoucement] = useState([])
  useEffect(() => {
    (async () => {
      Axios.get('http://localhost:5000/api/Annoucement/getAll/').then((response) => {
        setAnnoucement(response.data)
      })
    })()
  }, [])

  return (

    <div>

      {(typeof Annoucement[0] === 'undefined')
        ? (<p>  Loading... </p>)
        : (

          <div>

            <Table
              aria-label='Example table with static content'
              css={{
                height: 'auto',
                minWidth: '100%'
              }}
            >
              <Table.Header>
                <Table.Column>Date</Table.Column>
                <Table.Column>Time</Table.Column>
                <Table.Column>Annoucement</Table.Column>
                <Table.Column>Added by</Table.Column>

              </Table.Header>
              <Table.Body>
                {Annoucement.map((val, key) => {
                  return (
                    <Table.Row key={val._id}>
                      <Table.Cell>{(new Date(val.date)).toDateString()}</Table.Cell>
                      <Table.Cell>{(new Date(val.date)).toTimeString()}</Table.Cell>
                      <Table.Cell>{val.desc}</Table.Cell>

                      <Table.Cell>{val.addedBy} </Table.Cell>

                    </Table.Row>
                  )
                })}
              </Table.Body>
            </Table>

          </div>
          )}

    </div>
  )
}
export default ViewAnnouncements
