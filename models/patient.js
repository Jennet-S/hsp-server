// Import Mongoose for MongoDB
const mongoose = require('mongoose');

// Define a Mongoose schema for patients
const patientSchema = new mongoose.Schema({
  // Patient details
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  room: {
    type: String,
    required: true,
  },
  nhi: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  resus: {
    type: String,
    required: true,
    enum: ['Not set', 'Goal A', 'Goal B', 'Goal C'], // Enumerated values for resus
  },
  diagnosis: {
    type: String,
    required: true,
  },
  history: {
    type: String,
    required: true,
  },
});

// Create a Mongoose model named 'Patient' using the schema
const Patient = mongoose.model('Patient', patientSchema);

// Export the 'Patient' model for use in other files
module.exports = Patient;
