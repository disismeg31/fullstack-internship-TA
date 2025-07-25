const CONSTANTS = require('../shared/constants');
let Incident = require('./../models/incident')



function insertIncidents(req,res){
let incident = new Incident(req.body);
incident.save()
.then((result)=>{
    res.json({
        status:true,
        payload:result,
        message:"succesfully inserted incident"
    })
})
.catch((err)=>{
    // console.log(err);
    res.json({
        status:false,
        payload:err,
        message:"Error while inserting"
    })
})
}

function getUnresolvedIncidents(req,res){
    const {resolved} = req.query;
    if(resolved !== undefined && resolved === 'false'){
        Incident.find({resolved:false}).sort({timestamp:-1})
        .then((result)=>{

            if(result.length>0){
                res.json({
                status:true,
                payload:result,
                message:"Successfully fetched"
            })
            }
            else{
                res.json({
                status:true,
                payload:result,
                message:"No data of unresolved incidents"
            })
            }
            
        })
        .catch((err)=>{
            res.json({
                status:false,
                message:"Error while fetching"
            })
        })
    }
    else{
        res.json({
            status:false,
            message:"Missing or invalid 'resolved' query parameter"
        })
    }
}

function resolveIncidents(req,res){
 const {id} = req.params;
//  const incidentId = req.params.id;
//  const url = CONSTANTS.subUrls.incidents.resolve_Incidents.replace(':id',incidentId);
 if(!id){
    res.json({
        status:false,
        message:"Missing id or invalid params"
    })
 }
 Incident.findById(id)
    .then((incident)=>{
         incident.resolved = true;
         incident.save().then((updatedIncident)=>{
         res.json({
            status:true,
            payload:updatedIncident,
            message:"Incident resolved succesfulled"
         })
         }); 
    })
    .catch((err)=>{
        res.json({
            status:false,
            message:"Error while updating"
        })
    })
}

function deleteIncidents(req,res){
    Incident.deleteMany({})
  .then(() => {
    res.json({
        status:true,
        message:"All incidents deleted"
    })
  })
  .catch((err) => {
    res.json({
        status:false,
        message:"Error while deleteing"
    })
  });
}

module.exports = {
    insertIncidents,
    getUnresolvedIncidents,
    resolveIncidents,
    deleteIncidents
}