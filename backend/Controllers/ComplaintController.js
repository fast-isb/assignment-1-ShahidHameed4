import express from 'express'

import Complaint from '../models/Complaint.js'
import asynchandler from "express-async-handler"
const router = express.Router()

// Annoucements
router.post('/create', function (req, res) {
  let id
  while (true) {
    const val = Math.floor(1000 + Math.random() * 9000)
    const posts = Complaint.findOne({ id: val })
    console.log(posts)
    if (posts) {
      id = val
      break
    }
  }

  const posts = new Complaint({
    id,
    hNo: req.body.hNo,
    email: req.body.email,
    problem: req.body.problem,
    desc: req.body.desc,
    status: 'Pending',
    comments: '-'
  })

  posts.save((err, doc) => {
    if (err) {
      console.log(err)
    } else {
      res.send(posts)
    }
  }
  )
})
router.get('/get/:id', function (req, res) {
  const posts = Complaint.findOne({ _id: req.body.id }, function (err, posts) {
    if (err) {
      console.log(err)
    } else {
      res.send(posts)
    }
  })
})

router.get('/getAll', function (req, res) {
  const posts = Complaint.find({}, function (err, posts) {
    if (err) {
      console.log(err)
    } else {
      res.send(posts)
    }
  })
})
router.put('/update', function (req, res) {
  console.log(req.body)
  const myquery = { _id: req.body._id }
  const newvalues = { $set: { name: req.body.name } }

  const posts = Complaint.updateOne(myquery, newvalues, function (err, posts) {
    if (err) {
      console.log(err)
    } else {
      res.send(posts)
    }
  })
})
router.delete('/delete/:id', function (req, res) {
  const myquery = { _id: req.params.id }

  const posts = Complaint.deleteOne(myquery, function (err, posts) {
    if (err) {
      console.log(err)
    } else {
      res.send('Deleted')
    }
  })
})

export default router

// module.exports = router;
