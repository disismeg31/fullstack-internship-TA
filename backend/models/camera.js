const mongoose = require('mongoose');
const CONSTANTS = require('./../shared/constants.js');

const cameraSchema = new mongoose.Schema({
    name:String,
    location:String, 
},{ timestamps: true })

const Camera = mongoose.model(CONSTANTS.collectionName.cameras_collection,cameraSchema);
module.exports = Camera;
