var mongoose=require("mongoose");

const imgSchema=new mongoose.Schema({
    imgName:{
        type:String,
        required:true
    },
    imgDetails:{
        type:String,
        required:true
    },
    imgUrl:{
        type:String,
        required:true
    },
},{ timestamps: true });

const imageModel=mongoose.model('Image',imgSchema);

module.exports=imageModel;