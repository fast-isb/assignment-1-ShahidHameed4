const express=require("express")
const cors =require("cors");
const mongoose = require('mongoose');

var app=express();
app.use(cors()); //important for recieving api calls
app.use(express.static("public"));
app.use(express.json()); //important for recieving api calls

import AnnoucementRouter from '../routes/Annoucement.js'

app.use('/Annoucement',AnnoucementRouter);




app.listen(5000);