const Student = require('../models/Student');

// Controller functions for managing students
const studentController = {
  // Get all students
  getAllStudents: async (req, res) => {
    try {
      const students = await Student.find();
      res.json(students);
    } catch (error) {
      console.error('Error getting students:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // Get a single student by ID
  getStudentById: async (req, res) => {
    try {
      const student = await Student.findById(req.params.id);
      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }
      res.json(student);
    } catch (error) {
      console.error('Error getting student by ID:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // Create a new student
  createStudent: async (req, res) => {
    try {
      const { name, age, grade } = req.body;
      const newStudent = new Student({ name, age, grade });
      await newStudent.save();
      res.status(201).json({ message: 'Student created successfully', student: newStudent });
    } catch (error) {
      console.error('Error creating student:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // Update a student by ID
  updateStudent: async (req, res) => {
    try {
      const { name, age, grade } = req.body;
      const updatedStudent = await Student.findByIdAndUpdate(req.params.id, { name, age, grade }, { new: true });
      if (!updatedStudent) {
        return res.status(404).json({ message: 'Student not found' });
      }
      res.json({ message: 'Student updated successfully', student: updatedStudent });
    } catch (error) {
      console.error('Error updating student:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // Delete a student by ID
  deleteStudent: async (req, res) => {
    try {
      const deletedStudent = await Student.findByIdAndDelete(req.params.id);
      if (!deletedStudent) {
        return res.status(404).json({ message: 'Student not found' });
      }
      res.json({ message: 'Student deleted successfully', student: deletedStudent });
    } catch (error) {
      console.error('Error deleting student:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

module.exports = studentController;
