const express = require('express');
const mongoose = require('mongoose');
const courseRoutes = require('./routes/courses');
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 3000; // Allow port to be set via environment variable
const uri = process.env.MONGODB_URI; // Use environment variable

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // To handle URL-encoded data

// Connect to MongoDB
mongoose.connect(uri)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => {
    console.error("Could not connect to MongoDB", err);
    process.exit(1); // Exit the process with failure
  });

// Use course routes
app.use('/courses', courseRoutes);

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});