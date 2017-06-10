const express   = require("express");
const router    = express.Router();
const user      = require("./user");
const data      = require("./data");
// router.use("/authen",)

router.use("/user",user);
router.use("/data",data);

router.get("/",(req,res)=>{
    console.log("this is /");
    res.send("gg");
});

module.exports = router;
