const CONSTANTS = require('./../shared/constants.js');
const express = require('express');
let router = express.Router();
let cameraController = require('./../controllers/camera.controller.js');

router.route(CONSTANTS.subUrls.cameras.get_Cameras).get(cameraController.getCameras);

router.route(CONSTANTS.subUrls.cameras.insert_Cameras).post(cameraController.insertCameras);

module.exports = router;