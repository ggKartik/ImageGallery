const Express=require("express");
const app=Express();
const dotenv=require('dotenv')
const cloudinary=require('cloudinary');
const bodyparser=require('body-parser');
const cors = require('cors');

dotenv.config({path:"config/config.env"})
app.use(Express.json());
app.use(cors());
app.use(bodyparser.urlencoded({extended:true}))
const mongoose = require('mongoose');
require('./db/config')
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
app.listen(process.env.Port,(e)=>{
    if(e){
        console.log("Error");
        return;
    }
    console.log(`Server Running fine on port ${process.env.Port}`);
});


const homeRouter = require('./routers/homeRouter');
app.use('/home',homeRouter);