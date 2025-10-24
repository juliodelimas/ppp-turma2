const express = require('express');
const instructorRoutes = require('./instructorRoutes');
const studentRoutes = require('./studentRoutes');
const lessonRoutes = require('./lessonRoutes');
const progressRoutes = require('./progressRoutes');

const router = express.Router();

router.use('/instructor', instructorRoutes);
router.use('/student', studentRoutes);
router.use('/lessons', lessonRoutes);
router.use('/progress', progressRoutes);

module.exports = router;
