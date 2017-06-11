const express   = require("express");
const router    = express.Router();

const Movie      = require("../models/data");
const config    = require("../config/database");

router.get("/",(req,res)=>{
    console.log("this is /admin");
    //res.send("data");
});

router.post("/addmovie",(req,res)=>{
    let movie = new Movie({
        mid: req.body.mid,
        name: req.body.name,
        release_date: req.body.rd,
        category: req.body.category,
        poster: req.body.poster,
        trailer: req.body.trailer,
        description: req.body.description,
        rating: req.body.rating
    });

    movie.save((err,data)=>{
        if(err) 
            res.json({success:false,msg:"Duplicated Movie!"})
        else
            res.json({success:true,msg:"Movie added"});
    })
});

router.post("/edit",(req,res)=>{

});

module.exports = router;
