const CONSTANTS = {
    PORT:4242,
    mongoDBNName:'securesight-app',
    collectionName:{
        cameras_collection:'camera',
        incidents_collection:'incident'
    },
    URLS:{
        INCIDENT_PREFIX : '/api/incidents',
        CAMERA_PREFIX:'/api/cameras'
    },
    subUrls:{
        incidents:{
            get_Unresolved_Incidents:'', //GET /api/incidents?resolved=false
            insert_Incidents:'',  // POST /api/incidents
            resolve_Incidents:'/:id/resolve', //PATCH /api/incidents/:id/resolve
            delete_Incidents:'',//delete all incidents
        },
        cameras:{
            get_Cameras:'', // GET /api/cameras
            insert_Cameras:'' // POST /api/cameras
        }
         
    }
}

module.exports = CONSTANTS