const express = require('express');
const {getAllImg,uploadImg,updateDetails,deleteImg,showOne} = require('../controllers/homecontroller');
const homeRouter = express.Router();

homeRouter
.route('/')
.get(getAllImg)
.post(uploadImg);

homeRouter
.route('/:id')
.get(showOne)
.patch(updateDetails)
.delete(deleteImg)

module.exports=homeRouter;