const express   = require("express");
const router    = express.Router();


const user      = require("./user");
const data      = require("./data");
const admin     = require("./admin");

router.use("/user",user);
router.use("/admin",admin);
router.use("/data",data);

router.get("/",(req,res)=>{
    console.log("this is /");
    res.send("this is home page /");
});

module.exports = router;
