// Import the Express framework
const express = require('express');

// Create a router instance to define routes
const router = express.Router();

// Import the observation controller
const observationController = require('../controllers/observationController');

// Observation Routes
router.post('/observations', observationController.createObservation); // Create a new observation
router.get('/patients/:id/observations', observationController.getAllObservationByPatientId); // Get all observations for a specific patient
router.get('/observations/:id', observationController.getObservationById); // Get a specific observation by ID
router.put('/observations/:id', observationController.updateObservationById); // Update a specific observation by ID
router.delete('/observations/:id', observationController.deleteObservationById); // Delete a specific observation by ID

// Export the router to be used by the application
module.exports = router;
