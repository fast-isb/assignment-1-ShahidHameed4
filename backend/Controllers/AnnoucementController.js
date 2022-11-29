import express from 'express'

import Annoucement from '../models/Annoucement.js'
import asynchandler from "express-async-handler"

const router = express.Router()

// Annoucements
const createAnnoucement = asynchandler(async(req, res)=>{
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
const getAnnoucement = asynchandler(async (req, res)=> {
  const posts = Annoucement.findOne({ _id: req.body.id }, function (err, posts) {
    if (err) {
      console.log(err)
    } else {
      res.send(posts)
    }
  })
})

const getAnnoucements = asynchandler(async (req, res)=> {
  const posts = Annoucement.find({}, function (err, posts) {
    if (err) {
      console.log(err)
    } else {
      res.send(posts)
    }
  })
})
const updateAnnoucement = asynchandler(async (req, res)=> {
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
const deleteAnnoucement = asynchandler(async(req, res)=>{
  const myquery = { _id: req.params.id }

  const posts = Annoucement.deleteOne(myquery, function (err, posts) {
    if (err) {
      console.log(err)
    } else {
      res.send('Deleted')
    }
  })
})

export {
    createAnnoucement,
    getAnnoucement,
    getAnnoucements,
    updateAnnoucement,
    deleteAnnoucement,
  }
  
