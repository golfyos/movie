const express   = require('express');
const mongoose  = require('mongoose');
const path      = require("path");
const bodyParser = require('body-parser');
const port      = 3000;
const cors      = require("cors");
const app       = express();

const index      = require("./routes/index") ;
const config = require('./config/database');

mongoose.connect(config.database);
mongoose.connection.on('connected',()=>{
    console.log("Connect to Database " + config.database);
});
mongoose.connection.on('error',(err)=>{
    console.log("Database error : " + err);
});

app.use(express.static(path.join(__dirname,'public')));
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use("/",index);

app.listen(port,err=>{
    if(err)  console.log(err);
    console.log("listen on port "+port);
});