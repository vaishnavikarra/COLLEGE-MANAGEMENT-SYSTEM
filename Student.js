const mongoose = require('mongoose');

// Define Student Schema
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  grade: {
    type: String,
    required: true
  }
});

// Create Student model
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
