const CONSTANTS = require('./../shared/constants.js');
const express = require('express');
let router = express.Router();
let incidentController = require('./../controllers/incident.controller.js');

router.route(CONSTANTS.subUrls.incidents.get_Unresolved_Incidents).get(incidentController.getUnresolvedIncidents);

router.route(CONSTANTS.subUrls.incidents.insert_Incidents).post(incidentController.insertIncidents);

router.route(CONSTANTS.subUrls.incidents.resolve_Incidents).patch(incidentController.resolveIncidents);

router.route(CONSTANTS.subUrls.incidents.delete_Incidents).delete(incidentController.deleteIncidents);

module.exports = router;