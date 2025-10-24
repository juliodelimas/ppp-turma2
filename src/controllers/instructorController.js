const instructors = require('../models/instructorModel');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../middleware/authMiddleware');

function register(req, res) {
  const { name, email, password } = req.body;
  if (instructors.find(i => i.email === email)) {
    return res.status(400).json({ error: 'Instrutor já cadastrado' });
  }
  const instructor = { id: Date.now().toString(), name, email, password };
  instructors.push(instructor);
  res.status(201).json({ message: 'Instrutor registrado' });
}

function login(req, res) {
  const { email, password } = req.body;
  const instructor = instructors.find(i => i.email === email && i.password === password);
  if (!instructor) {
    return res.status(401).json({ error: 'Credenciais inválidas' });
  }
  const token = jwt.sign({ id: instructor.id, role: 'instructor' }, SECRET);
  res.json({ token });
}

module.exports = { register, login };
