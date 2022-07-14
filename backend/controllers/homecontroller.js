const express = require('express');
const imageModel = require('../models/imageModel');
const imgModel = require('../models/imageModel');

module.exports.getAllImg  = async function getAllImg(req,res) {
    try {
        let data = await imgModel.find();
        if(data){
            res.json({
                message:'Data Found',
                data:data
            })
        }
        else{
            res.json({message:'No Data Found'})
        }
    } catch (error) {
        res.json({message:error});
    }
}

module.exports.uploadImg = async function uploadImg(req,res){
    try {
        let data = req.body;
        let image = await imgModel.create(data);
        if(image){
            res.json({
                message:'Data uploaded Succesfully',
                data:image
            })
        }
        else{
            res.json({message:'Data Not Uploaded'})
        }
    } catch (error) {
        res.json({message:error})
    }
}

module.exports.updateDetails = async function updateDetails(req,res){
    try{
        let id =  req.params.id;
        let data = req.body;
        let imgdata = await imageModel.findById(id);
        if(data){
            let keys = [];
            for(let key in data){
                keys.push(key);
            }
            for(let i=0;i<keys.length;i++){
                imgdata[keys[i]] = data[keys[i]];
            }
            const updatedimg = await imgdata.save();
            res.json({
                message:'Details Updated Succesfully',
                data:updatedimg
            })
        }
        else{
            res.json({message:'No data sent for update'});
        }
    }
    catch(err){
        res.json({message:err});
    }
}

module.exports.deleteImg = async function deleteImg(req,res){
    try{
        let id = req.params.id;
        let data = await imageModel.findByIdAndDelete(id);
        if(data){
            res.json({
                message:'Img Deleted Succesfully',
                Image:data
            })
        }
        else{
            res.json({message:'Image Not Deleted'});
        }
    }catch (error){
        res.json({message:error})
    }
}

module.exports.showOne = async function showOne(req,res){
    try{
        let id = req.params.id;
        let data = await imageModel.findById(id);
        if(data){
            res.json({
                message:'Data Retrived Succesfully',
                Image:data
            })
        }
        else{
            res.json({message:'Data Not Found'})
        }
    }catch(error){
        res.json({message:error})
    }
}