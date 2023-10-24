import { Router } from "express";
import { Sample_Users } from "../data";
import jwt from 'jsonwebtoken';
import asynceHandler from 'express-async-handler'
import { UserModel } from "../models/user.model";
const router = Router();

router.get("/seed", asynceHandler(
    async (req, res) => {
         const UsersCount = await UserModel.countDocuments();
         if (UsersCount>0){
             res.send("Seed is already done");
             return;
         }
         await UserModel.create(Sample_Users);
         res.send("Seed is Created");
       }
 ));


router.post("/login", asynceHandler(
  async(req,res) => {
    const {email, password}= req.body
    const user = await UserModel.findOne({email, password});
      if(user){
        res.send(generateTokenResponse(user))
      }
      else
      res.status(404).send("User or Password is not Valid !");
  }
))
  
  const generateTokenResponse = (user : any)=>{
    const token = jwt.sign({
      email: user.email, isAdmin : user.isAdmin
    },"SomeRandomText",{
      expiresIn : "30d"
    })
    user.token = token;
    return user;
  }

  export default router;