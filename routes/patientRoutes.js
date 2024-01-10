// Import the Express framework
const express = require('express');

// Create a router instance to define routes
const router = express.Router();

// Import the patient controller
const patientController = require('../controllers/patientController');

// Patient Routes
router.post('/patients', patientController.createPatient); // Create a new patient
router.get('/patients', patientController.getAllPatients); // Get all patients
router.get('/patients/:id', patientController.getPatientById); // Get a specific patient by ID
router.put('/patients/:id', patientController.updatePatientById); // Update a specific patient by ID
router.delete('/patients/:id', patientController.deletePatientById); // Delete a specific patient by ID

// Export the router to be used by the application
module.exports = router;
