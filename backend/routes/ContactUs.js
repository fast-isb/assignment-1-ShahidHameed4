
import contactus from '../models/ContactUs.js'
import express from 'express'
import asynchandler from "express-async-handler"

const app = express.Router()

app.post("/create", async (req, res) => {
    try {
      const temp = await new contactus(req.body);
      temp.save().then((out) => {
        console.log(out);
        res.json({saved: out });
      });
    } catch (error) {
      res.json({ result: error });
    }
  });

export default app