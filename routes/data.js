const express   = require("express");
const request   = require("request");
const fs        = require("fs");
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
router.get("/category/:category",(req,res)=>{ /*  /data/category/:category   ex. /data/category/comedy */
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



/***** DON'T TOUCH *****/
/***** DON'T TOUCH *****/
/***** DON'T TOUCH *****/
router.post("/secret",(req,res)=>{
    if(req.body.access){

        let alldata=[]; 
        fs.readFile("./txtfile/id_name.txt",'utf8',(err,data)=>{

            let line = data.split(/\r\n|\r|\n/); 

            // new Promise((resolve, reject)=>{
            for(let i=0;i<line.length;i++){
                let sp = line[i].split(":");
                let uri = "http://www.omdbapi.com/?i="+sp[0]+"&plot=full&apikey=6f24724e";

                request(uri,(err,response,body)=>{

                    // alldata.push(JSON.parse(body));
                    let temp = JSON.parse(body);
                    // if(i==line.length-1) {
                        // res.json(alldata);
                        let cast = temp.Actors 
                        let cate = temp.Genre
                        let castArr = cast.split(",");
                        cate = cate.replace(" ","");
                        let cateArr = cate.split(",");

                        const movie = new Movie({
                            mid: temp.imdbID,
                            name: temp.Title,
                            release_date: temp.Released,
                            category: cateArr,
                            poster: temp.Poster,
                            trailer: sp[1],
                            description: temp.Plot,
                            rating: temp.imdbRating,
                            cast: castArr
                        });

                        movie.save((err,data)=>{
                            
                                // res.json({success:false,msg:"Duplicated Movie!"})
                            // else
                                // res.json({success:true,msg:"Movie added"});
                        })

                        if(i==line.length-1)
                            res.json({success:true,msg:"Movie added "+i});

                    // }
                })
            }
                
                // resolve(alldata)
            // })
                // .then(alldata=>res.json(alldata));
            
        });

    }else{
        res.json({msg:"Cannot Access"});
    }
});

module.exports = router;
