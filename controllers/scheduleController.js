// Import the Schedule model
const Schedule = require('../models/schedule');

// Controller functions for schedule operations
const scheduleController = {
  // Get all schedules
  getAllSchedules: async () => {
    try {
      // Find all schedules in the database
      const schedules = await Schedule.find();
      return schedules;
    } catch (error) {
      // Handle errors and throw the error
      console.error('Error getting all schedules:', error);
      throw error;
    }
  },

  // Add a new schedule item
  addScheduleItem: async (req, res) => {
    try {
      // Log received schedule item from the client
      console.log('Received schedule item from the client:', req.body);

      // Create a new Schedule instance using the request body
      const newScheduleItem = req.body;
      const scheduleItem = new Schedule(newScheduleItem);

      // Save the new schedule item to the database
      const savedItem = await scheduleItem.save();

      // Log the saved schedule item
      console.log('Saved schedule item to the database:', savedItem);

      // Send the saved schedule item as a JSON response
      res.json(savedItem);
    } catch (error) {
      // Handle errors and send a 500 Internal Server Error response
      console.error('Error adding schedule item:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Update a schedule item
  updateScheduleItem: async (req, res) => {
    try {
      // Extract schedule item ID and completed status from request parameters and body
      const scheduleItemId = req.params.id;
      const { completed } = req.body;

      // Update the schedule item by ID with the new completed status
      const updatedItem = await Schedule.findByIdAndUpdate(
        scheduleItemId,
        { completed },
        { new: true }
      );

      // Check if the schedule item was not found
      if (!updatedItem) {
        console.error('Schedule item not found');
        return res.status(404).json({ error: 'Schedule item not found' });
      }

      // Log the updated schedule item and send it as a JSON response
      console.log('Updated schedule item:', updatedItem);
      res.json(updatedItem);
    } catch (error) {
      // Handle errors and send a 500 Internal Server Error response
      console.error('Error updating schedule item:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Delete a schedule item
  deleteScheduleItem: async (req, res) => {
    try {
      // Extract schedule item ID from request parameters
      const scheduleItemId = req.params.id;

      // Delete the schedule item by ID
      const deletedItem = await Schedule.findByIdAndDelete(scheduleItemId);

      // Check if the schedule item was not found
      if (!deletedItem) {
        console.error('Schedule item not found');
        return res.status(404).json({ error: 'Schedule item not found' });
      }

      // Log the deleted schedule item and send it as a JSON response
      console.log('Deleted schedule item:', deletedItem);
      res.json(deletedItem);
    } catch (error) {
      // Handle errors and send a 500 Internal Server Error response
      console.error('Error deleting schedule item:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

// Export the schedule controller
module.exports = scheduleController;
