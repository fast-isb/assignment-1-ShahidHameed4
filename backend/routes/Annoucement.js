import express from 'express'

import Annoucement from '../models/Annoucement.js'

const router = express.Router()

// Annoucements
router.post('/create', function (req, res) {
  const posts = new Annoucement({
    date: Date.now(),
    desc: req.body.desc,
    addedBy: req.body.addedBy
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
router.get('/get/:id', function (req, res) {
  const posts = Annoucement.findOne({ _id: req.body.id }, function (err, posts) {
    if (err) {
      console.log(err)
    } else {
      res.send(posts)
    }
  })
})

router.get('/getAll', function (req, res) {
  const posts = Annoucement.find({}, function (err, posts) {
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

  const posts = Person.updateOne(myquery, newvalues, function (err, posts) {
    if (err) {
      console.log(err)
    } else {
      res.send(posts)
    }
  })
})
router.delete('/delete/:id', function (req, res) {
  const myquery = { _id: req.params.id }

  const posts = Annoucement.deleteOne(myquery, function (err, posts) {
    if (err) {
      console.log(err)
    } else {
      res.send('Deleted')
    }
  })
})

export default router

// module.exports = router;
