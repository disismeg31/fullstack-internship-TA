const mongoose = require('mongoose');
const CONSTANTS = require('./../shared/constants.js');

const incidentSchema = mongoose.Schema({
    cameraId: { type: mongoose.Schema.Types.ObjectId, ref: 'Camera' },
    type: String,
    tsStart: Date,
    tsEnd: Date,
    thumbnailUrl: String,
    resolved: { type: Boolean, default: false }
}, 
{
  timestamps: true
})

const Incident = mongoose.model(CONSTANTS.collectionName.incidents_collection,incidentSchema);
module.exports = Incident;