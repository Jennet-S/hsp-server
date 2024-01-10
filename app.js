// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import route modules
const patientRoutes = require('./routes/patientRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');
const observationRoutes = require('./routes/observationRoutes');

// Create an Express application
const app = express();
const port = 3000;

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb+srv://myusername:mypassword@cluster0.h2lxr0p.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Handle MongoDB connection events
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Use JSON middleware to parse incoming requests
app.use(express.json());

// Define routes for patient, schedule, and observation
app.use('/api', patientRoutes);
app.use('/api', scheduleRoutes);
app.use('/api', observationRoutes);

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
