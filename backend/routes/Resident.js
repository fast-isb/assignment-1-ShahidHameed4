import express from 'express';


const router = express.Router();
import Resident from '../models/Resident.js'


//Residents
router.post("/create",function(req,res){
    

    var posts = new Resident({
    fname : req.body.fname,
    lname : req.body.lname,
    cnic : req.body.cnic,
    email : req.body.email,
    password : req.body.password,
      });


      posts.save((err, doc) => {
        if (err){
            console.log(req.body)
        }
        else{
            res.send(posts)
        }
        }
        )
        

});
router.get("/get/:cnic",function(req,res){
  

    
    let posts = Resident.findOne({cnic: req.params.cnic}, function(err, posts){
        if(err){
            console.log(err);
        }
        else {
            res.send(posts);
        }
    });
    

});

router.get("/getAll",function(req,res){
  



        let posts = Resident.find({}, function(err, posts){
            if(err){
                console.log(err);
            }
            else {
                res.send(posts);
            }
        });
        

});
router.put("/update",function(req,res){
  
   console.log(req.body);
      var myquery = { _id: req.body._id };
     var newvalues = { $set: {name: req.body.name} };

        let posts = Resident.updateOne(myquery,newvalues, function(err, posts){
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
 
         let posts = Resident.deleteOne(myquery, function(err, posts){
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