const express   = require("express");
const router    = express.Router();

const Movie     = require("../models/data");
const config    = require("../config/database");

/* Get All Movie */
router.get("/",(req,res)=>{  /* /data */
    // console.log("this is /data");
    Movie.find()
        .exec()
        .then(test=>{
            res.json(test);
        })
        .catch(err=>next(err));
});

/* Filter Movie By Category */
router.get("/:category",(req,res)=>{ /*  /data/:category   ex. /data/comedy */
    let category = req.params.category;
    Movie.find({category:category},(err,data)=>{
        if(!data)
            res.json({success:false,msg:"No Movie"});
        else
            res.json(data);
    });
});

/* Get Movie By ID */
router.get("/movie/:id",(req,res)=>{  /*  /data/movie/:id  ex. /data/movie/t123456  */
    let id = req.params.id;
    Movie.findOne({mid:id},(err,data)=>{
        if(!data)
            res.json({success:false,msg:"No Movie"});
        else
            res.json(data);
    });
});



module.exports = router;
