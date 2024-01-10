// Import the Observation model
const Observation = require('../models/observation');

// Controller for handling operations related to observations
const observationController = {
  // Create a new observation
  createObservation: async (req, res) => {
    try {
      // Extract observation details from the request body
      const { patientId, temperature, bloodPressure, heartRate, respiratoryRate, oxygenSaturation, observationTime } = req.body;

      // Create a new observation using the Observation model
      const newObservation = await Observation.create({
        patientId,
        temperature,
        bloodPressure,
        heartRate,
        respiratoryRate,
        oxygenSaturation,
        observationTime,
      });

      // Log success message and send the new observation as a JSON response
      console.log('Observation created successfully:', newObservation);
      res.status(201).json(newObservation);
    } catch (error) {
      // Log error message and send a 500 Internal Server Error response
      console.error('Error creating observation:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Get an observation by its ID
  getObservationById: async (req, res) => {
    try {
      // Find the observation by its ID
      const observation = await Observation.findById(req.params.id);

      // If observation not found, send a 404 Not Found response
      if (!observation) {
        return res.status(404).json({ error: 'Observation not found' });
      }

      // Send the observation as a JSON response
      res.json(observation);
    } catch (error) {
      // Log error message and send a 500 Internal Server Error response
      console.error('Error fetching observation by ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Get all observations associated with a specific patient ID
  getAllObservationByPatientId: async (req, res) => {
    try {
      // Find all observations with the specified patient ID
      const observations = await Observation.find({ patientId: req.params.id });

      // Send the observations as a JSON response
      res.json(observations);
    } catch (error) {
      // Log error message and send a 500 Internal Server Error response
      console.error('Error fetching observations by patient ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Delete an observation by its ID
  deleteObservationById: async (req, res) => {
    try {
      // Extract observation ID from the request parameters
      const observationId = req.params.id;

      // Delete the observation by its ID
      const deletedObservation = await Observation.findByIdAndDelete(observationId);

      // If observation not found, send a 404 Not Found response
      if (!deletedObservation) {
        return res.status(404).json({ error: 'Observation not found' });
      }

      // Send a success message as a JSON response
      res.json({ message: 'Observation deleted successfully' });
    } catch (error) {
      // Log error message and send a 500 Internal Server Error response
      console.error('Error deleting observation by ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Update an observation by its ID
  updateObservationById: async (req, res) => {
    try {
      // Find and update the observation by its ID
      const updatedObservation = await Observation.findByIdAndUpdate(req.params.id, req.body, { new: true });

      // If observation not found, send a 404 Not Found response
      if (!updatedObservation) {
        return res.status(404).json({ error: 'Observation not found' });
      }

      // Send the updated observation as a JSON response
      res.json(updatedObservation);
    } catch (error) {
      // Log error message and send a 500 Internal Server Error response
      console.error('Error updating observation by ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

// Export the observation controller
module.exports = observationController;
