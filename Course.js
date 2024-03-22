const mongoose = require('mongoose');

// Define Course Schema
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  instructor: {
    type: String,
    required: true
  },
  capacity: {
    type: Number,
    required: true
  }
});

// Create Course model
const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
