const express   = require("express");
const router    = express.Router();

const Movie      = require("../models/data");
const config    = require("../config/database");

router.get("/",(req,res)=>{
    // console.log("this is /admin");
    //res.send("data");
});


/* Admin Add Movie , Except review*/
router.post("/addmovie",(req,res)=>{
    let cast = req.body.cast;  
    let cate = req.body.category;

    let castArr = cast.split(",");
    cate = cate.replace(" ","");
    let cateArr = cate.split(",");
    for(let i=0;i<cateArr.length;i++){
        cateArr[i] = cateArr[i].charAt(0).toUpperCase() + cateArr[i].slice(1);
    }

    let trailer = req.body.trailer;
    let link = trailer.split("=");

    let da = req.body.rd.split(" ");
    let intDate = parseInt(da[0])+1
    let strDate = intDate + " " + da[1] + " " +da[2];

    const movie = new Movie({
        mid: req.body.mid,
        name: req.body.name,
        release_date: new Date(strDate),
        category: cateArr,
        poster: req.body.poster,
        trailer: link[1],
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


router.post("/deletemovie",(req,res)=>{
    let id = req.body.id;
    Movie.findOne({mid:id},(err,data)=>{
        if(!data) 
            res.json({success:false,msg:"No Movie to Delete"})
        else{
            let name = data.name;
            // console.log(data.name);
            Movie.remove({mid:id},err2=>{
                if(err2) 
                    res.json({success:false,msg:"Delete Error"})
                res.json({success:true,msg:"Movie : "+ name +" Deleted"})
            });
        }
    });

});


module.exports = router;
