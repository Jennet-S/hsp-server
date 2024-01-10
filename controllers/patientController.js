// Import the Patient model
const Patient = require('../models/patient');

// Controller functions for patient operations
const patientController = {
  // Create a new patient
  createPatient: async (req, res) => {
    try {
      // Log received patient data from the request body
      console.log('Received patient data:', req.body);

      // Create a new Patient instance using the request body
      const newPatient = new Patient(req.body);

      // Log the new patient data
      console.log('New Patient Data:', newPatient);

      // Save the new patient to the database
      const savedPatient = await newPatient.save();

      // Log the saved patient data
      console.log('Saved Patient:', savedPatient);

      // Send the saved patient as a JSON response
      res.json(savedPatient);
    } catch (error) {
      // Handle errors and send a 500 Internal Server Error response
      res.status(500).json({ message: error.message });
    }
  },

  // Get all patients
  getAllPatients: async (req, res) => {
    try {
      // Find all patients in the database
      const patients = await Patient.find();

      // Send the list of patients as a JSON response
      res.json(patients);
    } catch (error) {
      // Handle errors and send a 500 Internal Server Error response
      res.status(500).json({ message: error.message });
    }
  },

  // Get a specific patient by ID
  getPatientById: async (req, res) => {
    try {
      // Find a patient by its ID
      const patient = await Patient.findById(req.params.id);

      // Send the patient details as a JSON response
      res.json(patient);
    } catch (error) {
      // Handle errors and send a 500 Internal Server Error response
      res.status(500).json({ message: error.message });
    }
  },

  // Update a patient by ID
  updatePatientById: async (req, res) => {
    try {
      // Update a patient by its ID with the request body
      const updatedPatient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });

      // Send the updated patient details as a JSON response
      res.json(updatedPatient);
    } catch (error) {
      // Handle errors and send a 500 Internal Server Error response
      res.status(500).json({ message: error.message });
    }
  },

  // Delete a patient by ID
  deletePatientById: async (req, res) => {
    try {
      // Delete a patient by its ID
      await Patient.findByIdAndDelete(req.params.id);

      // Send a success message as a JSON response
      res.json({ message: 'Patient deleted successfully' });
    } catch (error) {
      // Handle errors and send a 500 Internal Server Error response
      res.status(500).json({ message: error.message });
    }
  },
};

// Export the patient controller
module.exports = patientController;
