const lessons = require('../models/lessonModel');

function createLesson(req, res) {
  const { title, description } = req.body;
  const lesson = { id: Date.now().toString(), title, description };
  lessons.push(lesson);
  res.status(201).json({ message: 'Lição registrada', lesson });
}

function listLessons(req, res) {
  res.json(lessons);
}

module.exports = { createLesson, listLessons };
