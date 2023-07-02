const Express=require("express");
const app=Express();
const dotenv=require('dotenv')
const bodyparser=require('body-parser');
const cors = require('cors');
const path = require("path");

dotenv.config({ path: "config.env" });
app.use(Express.json());
app.use(cors());
app.use(bodyparser.urlencoded({extended:true}))
const mongoose = require('mongoose');
require('./db/config')

const homeRouter = require('./routers/homeRouter');
app.use('/home',homeRouter);

app.use(Express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});


app.listen(process.env.PORT,(e)=>{
    if(e){
        console.log("Error");
        return;
    }
    console.log(`Server Running fine on port ${process.env.PORT}`);
});


