const express = require('express');
const { getProgress, completeLesson } = require('../controllers/progressController');
const { authenticateStudent } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', authenticateStudent, getProgress);
router.post('/complete', authenticateStudent, completeLesson);

module.exports = router;
