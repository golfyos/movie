const express   = require("express");
const router    = express.Router();

const Movie      = require("../models/data");
const config    = require("../config/database");

router.get("/",(req,res)=>{
    console.log("this is /admin");
    //res.send("data");
});


/* Admin Add Movie , Except review*/
router.post("/addmovie",(req,res)=>{
    let cast = req.body.cast;  
    let cate = req.body.category;

    let castArr = cast.split(",");
    cate = cate.replace(" ","");
    let cateArr = cate.split(",");

    const movie = new Movie({
        mid: req.body.mid,
        name: req.body.name,
        release_date: req.body.rd,
        category: cateArr,
        poster: req.body.poster,
        trailer: req.body.trailer,
        description: req.body.description,
        rating: req.body.rating,
        cast: castArr
    });

    movie.save((err,data)=>{
        if(err) 
            res.json({success:false,msg:"Duplicated Movie!"})
        else
            res.json({success:true,msg:"Movie added"});
    })
});


router.post("/edit",(req,res)=>{
    let movie = new Movie({

    });
});

module.exports = router;
