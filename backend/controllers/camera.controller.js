let Camera = require('./../models/camera');

function insertCameras(req,res){
const cameras = req.body;

    if(cameras.length === 0){
    res.json({
        status:false,
        message:"send an array of camera details"
    })
    }
 
Camera.insertMany(cameras)
.then((result)=>{
    res.json({
        status:true,
        payload:result,
        message:"successfully inserted", 
    })
})
.catch((err)=>{
    res.json({
        status:false,
        payload:err,
        message:"error while inserting"
    })
})

}


function getCameras(req,res){
    Camera.find({},{__v:0,createdAt:0,updatedAt:0})
    .then((result)=>{
        res.json({
            status:true,
            payload:result,
            message:"successfully fetched cameras"
        })
    })
    .catch((err)=>{
        res.json({
            status:false,
            payload:err,
            message:"error while fetching"
        })
    })
}

module.exports = {
    insertCameras,
    getCameras
}