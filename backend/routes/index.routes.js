const express = require('express');
let router = express.Router();
const CONSTANTS = require('./../shared/constants.js');
let cameraRouter = require('./cameras.js');
let incidentRouter = require('./incidents.js')
router.get('/', function(req,res){
    res.json('App ready');
})

router.use(CONSTANTS.URLS.CAMERA_PREFIX,cameraRouter);

router.use(CONSTANTS.URLS.INCIDENT_PREFIX,incidentRouter);

module.exports = router;