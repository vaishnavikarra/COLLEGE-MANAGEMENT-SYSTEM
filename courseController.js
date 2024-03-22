const Course = require('../models/Course');

// Controller functions for managing courses
const courseController = {
  // Get all courses
  getAllCourses: async (req, res) => {
    try {
      const courses = await Course.find();
      res.json(courses);
    } catch (error) {
      console.error('Error getting courses:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // Get a single course by ID
  getCourseById: async (req, res) => {
    try {
      const course = await Course.findById(req.params.id);
      if (!course) {
        return res.status(404).json({ message: 'Course not found' });
      }
      res.json(course);
    } catch (error) {
      console.error('Error getting course by ID:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // Create a new course
  createCourse: async (req, res) => {
    try {
      const { title, instructor, capacity } = req.body;
      const newCourse = new Course({ title, instructor, capacity });
      await newCourse.save();
      res.status(201).json({ message: 'Course created successfully', course: newCourse });
    } catch (error) {
      console.error('Error creating course:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // Update a course by ID
  updateCourse: async (req, res) => {
    try {
      const { title, instructor, capacity } = req.body;
      const updatedCourse = await Course.findByIdAndUpdate(req.params.id, { title, instructor, capacity }, { new: true });
      if (!updatedCourse) {
        return res.status(404).json({ message: 'Course not found' });
      }
      res.json({ message: 'Course updated successfully', course: updatedCourse });
    } catch (error) {
      console.error('Error updating course:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // Delete a course by ID
  deleteCourse: async (req, res) => {
    try {
      const deletedCourse = await Course.findByIdAndDelete(req.params.id);
      if (!deletedCourse) {
        return res.status(404).json({ message: 'Course not found' });
      }
      res.json({ message: 'Course deleted successfully', course: deletedCourse });
    } catch (error) {
      console.error('Error deleting course:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

module.exports = courseController;
