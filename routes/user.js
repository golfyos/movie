const express   = require("express");
const bcrypt    = require('bcryptjs');
const passport  = require('passport');
const jwt       = require('jsonwebtoken');
const router    = express.Router();

const User      = require("../models/user");
const config    = require("../config/database");

router.get("/",(req,res)=>{
    // console.log("this is /user");
    res.send("user");
});

router.post("/register",(req,res)=>{
    // console.log("/user/register");
    let user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        status: req.body.status
    });
    User.findOne({$or:[{username:user.username},{email:user.email}]},(err,data)=>{
        if(!data){
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
        }else{
            res.json({success:false,msg:"This Username or Email is used"});
        }
    });
    
});

router.post("/login",(req,res)=>{
    // console.log("/user/login");
    let username = req.body.username;
    let password = req.body.password;

    User.findOne({username:username},(err,user)=>{
        if(!user)
            res.json({success:false,msg:"User not Found"});
        else{
            bcrypt.compare(password,user.password,(err,match)=>{
                if(match){
                    const token = jwt.sign(user, config.secret,{
                    expiresIn : 604800  
                    })
                    res.json({
                        success : true,
                        token : "JWT " + token,
                        user : {
                            id : user._id,
                            // name : user.name,
                            username : user.username,
                            email : user.email,
                            firstname : user.firstname,
                            lastname : user.lastname
                            // password : user.password
                            
                        }
                    })

                }else{
                    res.json({success:false,msg:"Wrong Password"});
                }
            });
        }
    });

});

router.get('/profile',passport.authenticate("jwt",{session:false}),(req,res,next)=>{
    // console.log("/user/profile");
    res.json({user: req.user});
});

module.exports = router;

