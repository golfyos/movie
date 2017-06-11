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
            res.json({success:true,data:data});
    });
});

/* Get Movie By ID */
router.get("/movie/:id",(req,res)=>{  /*  /data/movie/:id  ex. /data/movie/t123456  */
    let id = req.params.id;
    Movie.findOne({mid:id},(err,data)=>{
        if(!data)
            res.json({success:false,msg:"No Movie"});
        else
            res.json({success:true,data:data});
    });
});

/* Add Review */
router.post("/addreview",(req,res)=>{   /*  /data/addreview  */
    const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Sep","Oct","Nov","Dec"];
    let d = new Date();
    let hour = d.getHours()<10?   "0"+d.getHours() : d.getHours();
    let min  = d.getMinutes()<10? "0"+d.getMinutes() : d.getMinutes();
    let sec  = d.getSeconds()<10? "0"+d.getSeconds() : d.getSeconds();

    let strDate = d.getDate()+" "+month[d.getMonth()]+" "+d.getFullYear()
                    +"  "+hour+":"+min+":"+sec;
    // res.json({date:strDate});
    let data = {
        name: req.body.name,
        comment: req.body.comment,
        dated: strDate
    }

    Movie.update({mid:req.body.mid}, {$push:{review:data}}, (err,data)=>{
        if(err)
            res.json({success:false,err:err});
        else   
            res.json({success:true,msg:"Review Added"});
    });
});


module.exports = router;
