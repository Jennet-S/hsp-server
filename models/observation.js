// Import Mongoose for MongoDB
const mongoose = require('mongoose');

// Define a Mongoose schema for observations
const observationSchema = new mongoose.Schema({
  // Patient ID referencing the 'Patient' model
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient', // Reference to the 'Patient' model
    required: true,
  },
  // Observation details
  temperature: { type: Number },
  bloodPressure: { type: String },
  heartRate: { type: Number },
  respiratoryRate: { type: Number },
  oxygenSaturation: { type: Number },
  observationTime: { type: String }, // Store observation time as a string

  // Additional properties can be added as needed
});

// Create a Mongoose model named 'Observation' using the schema
const Observation = mongoose.model('Observation', observationSchema);

// Export the 'Observation' model for use in other files
module.exports = Observation;
