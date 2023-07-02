const express = require('express');
const imageModel = require('../models/imageModel');
const feature = require('../utils/features');


module.exports.getAllImg  = async function getAllImg(req,res) {
    try {
        const perpageitem = 9;
        const Image = new feature(imageModel.find(),req.query).search();
        let images = await Image.query;   
        let filteredimagecount=images.length
        Image.pagination(perpageitem);
        images = await Image.query.clone();
        
        res.status(200).json({
            success:true,
            images,
            perpageitem,
            filteredimagecount
        })
       
    } catch (error) {
        res.json({message:"error"});
    }
}

module.exports.uploadImg = async function uploadImg(req,res){
    try {
        let data = req.body;
        let newimage = await imageModel.create(data);
        if(newimage){   
            res.status(200).json({
                success:true,
                newimage
            })
        }
        else{
            res.json({message:'Data Not Uploaded'})
        }
    } catch (error) {
        res.json({message:"error"})
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
            res.status(200).json({
                success:true
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
            res.status(200).json({
                success:true,
                data
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
        let image = await imageModel.findById(id);
        if(image){
            res.status(200).json({
                success:true,
                image
            })
        }
        else{
            res.json({message:'Data Not Found'})
        }
    }catch(error){
        res.json({message:error})
    }
}