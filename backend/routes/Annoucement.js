import express from 'express';
const mongoose = require('mongoose');

const router = express.Router();

// provide todo route implementation here
app.use(express.static("public"));
app.use(express.json()); //important for recieving api calls

const Annoucement = require('./models/Annoucement');


//Annoucements 
router.post("/create",function(req,res){
  
    var userDetails = new Annoucement({
        name: req.body.name,
      });
      userDetails.save((err, doc) => {
        if (err){
            console.log(err)
        }
        else{
            res.send(userDetails)
        }
        }
        )
        

});
router.get("/get/:id",function(req,res){
  

    let posts = Person.findOne({}, function(err, posts){
        if(err){
            console.log(err);
        }
        else {
            res.send(posts);
        }
    });
    

});

app.get("/Annoucement/getAll",function(req,res){
  

        let posts = Person.find({}, function(err, posts){
            if(err){
                console.log(err);
            }
            else {
                res.send(posts);
            }
        });
        

});
app.put("/Annoucement/update",function(req,res){
  
   console.log(req.body);
      var myquery = { _id: req.body._id };
     var newvalues = { $set: {name: req.body.name} };

        let posts = Person.updateOne(myquery,newvalues, function(err, posts){
            if(err){
                console.log(err);
            }
            else {
                res.send(posts);
            }
        });
});
app.delete("/Annoucement/delete/:id",function(req,res){
  
   
       var myquery = { _id: req.params.id };
 
         let posts = Person.deleteOne(myquery, function(err, posts){
             if(err){
                 console.log(err);
             }
             else {
                 res.send("Deleted")
             }
         });
 });













export default router;

// module.exports = router;