import jwt from "jsonwebtoken"
import asynchandler from "express-async-handler"
import Resident from "../models/Resident.js"


const protect = asynchandler( async(req,res,next)=>{
    console.log(req.headers)
    let token=null

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
      

        try {
       
            token=req.headers.authorization.split(" ")[1];

            let decoded=jwt.verify(token,process.env.JWT_Token)

            

            req.Resident= await Resident.findOne({_id:decoded.id}).select("-password")
            
            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error("Not Authorized  ")
            
        }
        
    }
    if(token==null){
       
        res.status(401)
        throw new Error("Not Authorized,No token  ")
    }


} )
export default protect;