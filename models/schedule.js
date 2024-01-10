// Import Mongoose for MongoDB
const mongoose = require('mongoose');

// Define a Mongoose schema for schedules
const scheduleSchema = new mongoose.Schema({
  // Schedule details
  time: {
    type: String,
    required: true,
  },
  scheduleItem: {
    type: String,
    required: true,
  },
  room: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false, // Default value is set to false
  },
});

// Create a Mongoose model named 'Schedule' using the schema
const Schedule = mongoose.model('Schedule', scheduleSchema);

// Export the 'Schedule' model for use in other files
module.exports = Schedule;
