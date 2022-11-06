import express from 'express'
import Resident from '../models/Resident.js'

const router = express.Router()

// Residents
router.post('/create', function (req, res) {
  const posts = new Resident({
    fname: req.body.fname,
    lname: req.body.lname,
    cnic: req.body.cnic,
    email: req.body.email,
    password: req.body.password,
    age: req.body.age
  })

  posts.save((err, doc) => {
    if (err) {
      console.log(req.body)
    } else {
      res.send(posts)
    }
  }
  )
})
router.get('/get/:cnic', function (req, res) {
  const posts = Resident.findOne({ cnic: req.params.cnic }, function (err, posts) {
    if (err) {
      console.log(err)
    } else {
      res.send(posts)
    }
  })
})

router.get('/getAll', function (req, res) {
  const posts = Resident.find({}, function (err, posts) {
    if (err) {
      console.log(err)
    } else {
      res.send(posts)
    }
  })
})
router.put('/update/:cnic', function (req, res) {
  console.log(req.body)
  const myquery = { cnic: req.params.cnic }
  const newvalues = { $set: { fname: req.body.fname, lname: req.body.lname, password: req.body.password, email: req.body.email, age: req.body.age } }
  const posts = Resident.updateOne(myquery, newvalues, function (err, posts) {
    if (err) {
      console.log(err)
    } else {
      res.send(posts)
    }
  })
})
router.delete('/delete/:id', function (req, res) {
  const myquery = { _id: req.params.id }

  const posts = Resident.deleteOne(myquery, function (err, posts) {
    if (err) {
      console.log(err)
    } else {
      res.send('Deleted')
    }
  })
})

export default router

// module.exports = router;
