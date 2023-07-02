const Express=require("express");
const app=Express();
const dotenv=require('dotenv')
const bodyparser=require('body-parser');
const cors = require('cors');

dotenv.config({ path: "config.env" });
app.use(Express.json());
app.use(cors());
app.use(bodyparser.urlencoded({extended:true}))
const mongoose = require('mongoose');
require('./db/config')

app.listen(process.env.PORT,(e)=>{
    if(e){
        console.log("Error");
        return;
    }
    console.log(`Server Running fine on port ${process.env.PORT}`);
});


const homeRouter = require('./routers/homeRouter');
app.use('/home',homeRouter);