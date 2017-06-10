const express   = require("express");
const router    = express.Router();
const User      = require("../models/user");
const bcrypt    = require('bcryptjs');

const config = require("../config/database");

router.get("/",(req,res)=>{
    console.log("this is /user");
    res.send("user");
});

router.post("/register",(req,res)=>{
    console.log("/user/register");
    let user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    });

    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(user.password,salt,(err,hash)=>{
            user.password = hash;
            user.save((err,data)=>{
                if(err) 
                    res.json({success:false,msg:"Failed to Register User"})
                else 
                    res.json({success:true,msg:"User Registered"})
            });
        });
    });
});

router.post("/login",(req,res)=>{
    console.log("/user/login");

})
module.exports = router;

