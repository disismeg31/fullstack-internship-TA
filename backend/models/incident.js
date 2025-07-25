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

incidentSchema.pre('save', function(next) {
  if (!this.tsStart) {
    this.tsStart = this.timestamp || new Date();; // default to same as timestamp and in case of undefined fall back to current date
  }

  if (!this.tsEnd) {
    // const baseTime = this.timestamp instanceof Date ? this.timestamp : new Date(this.timestamp);
    this.tsEnd = new Date(this.tsStart.getTime() + 5 * 60 * 1000); // default to +5 minutes
  }

  next();
});

const Incident = mongoose.model(CONSTANTS.collectionName.incidents_collection,incidentSchema);
module.exports = Incident;