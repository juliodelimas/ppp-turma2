const progress = require('../models/progressModel');
const lessons = require('../models/lessonModel');

function getProgress(req, res) {
  const userId = req.user.id;
  const completed = progress.filter(p => p.studentId === userId).map(p => p.lessonId);
  const allLessons = lessons.map(l => ({ id: l.id, title: l.title }));
  res.json({ completed, allLessons });
}

function completeLesson(req, res) {
  const userId = req.user.id;
  const { lessonId } = req.body;
  if (!lessons.find(l => l.id === lessonId)) {
    return res.status(404).json({ error: 'Lição não encontrada' });
  }
  if (progress.find(p => p.studentId === userId && p.lessonId === lessonId)) {
    return res.status(400).json({ error: 'Lição já marcada como realizada' });
  }
  progress.push({ studentId: userId, lessonId });
  res.status(201).json({ message: 'Lição marcada como realizada' });
}

module.exports = { getProgress, completeLesson };
