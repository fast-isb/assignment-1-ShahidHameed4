import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();
import Complaint from '../models/Complaint.js'


//Annoucements 
router.post("/create",function(req,res){
    var id;
    while(true){
        var val = Math.floor(1000 + Math.random() * 9000);
        let posts = Complaint.findOne({id:val})
        console.log(posts)
        if(posts){
            id=val;
            break;
        }
        
    }

    var posts = new Complaint({
        id : id,
        hNo : req.body.hNo,
        email :req.body.email,
        problem : req.body.problem,
        desc : req.body.desc,
        status : "Pending" ,
        comments : "-",
      });


      posts.save((err, doc) => {
        if (err){
            console.log(err)
        }
        else{
            res.send(posts)
        }
        }
        )
        

});
router.get("/get/:email",function(req,res){
  

    
    let posts = Complaint.find({email: req.params.email }, function(err, posts){
        if(err){
            console.log(err);
        }
        else {
            res.send(posts);
        }
    });
    

});

router.delete("/delete/:id",function(req,res){
  
   
       var myquery = { _id: req.params.id };
 
         let posts = Complaint.deleteOne(myquery, function(err, posts){
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