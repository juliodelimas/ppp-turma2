const express = require('express');
const { createLesson, listLessons } = require('../controllers/lessonController');
const { authenticateInstructor } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authenticateInstructor, createLesson);
router.get('/', listLessons);

module.exports = router;
