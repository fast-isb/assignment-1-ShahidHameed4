import express from 'express'
import cors from 'cors' // important for recieving api calls

import AnnoucementRouter from './routes/Annoucement.js'
import ResidentRouter from './routes/Resident.js'
import ComplaintRouter from './routes/Complaint.js'
import * as dotenv from 'dotenv';
dotenv.config();

const app = express()
app.use(cors()) // important for recieving api calls
app.use(express.static('public'))
app.use(express.json())

app.use('/api/Annoucement', AnnoucementRouter)
app.use('/api/Residents', ResidentRouter)
app.use('/api/Complaint', ComplaintRouter)
app.get('/get', function (req, res) {
  res.send('<h1>bhashusahshu</h1>')
  // let posts = Person.findOne({}, function(err, posts){
  //     if(err){
  //         console.log(err);
  //     }
  //     else {
  //         res.send(posts);
  //     }
  // });
})

app.listen(5000)
