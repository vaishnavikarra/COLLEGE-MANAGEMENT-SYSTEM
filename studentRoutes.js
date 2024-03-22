const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const authMiddleware = require('../middleware/authMiddleware');

// GET all students
router.get('/', studentController.getAllStudents);

// GET a single student by ID
router.get('/:id', studentController.getStudentById);

// POST a new student
router.post('/', authMiddleware, studentController.createStudent);

// PUT update a student by ID
router.put('/:id', authMiddleware, studentController.updateStudent);

// DELETE a student by ID
router.delete('/:id', authMiddleware, studentController.deleteStudent);

module.exports = router;
