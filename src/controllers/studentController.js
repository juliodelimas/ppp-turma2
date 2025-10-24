const students = require('../models/studentModel');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../middleware/authMiddleware');

function register(req, res) {
  const { name, email, password } = req.body;
  if (students.find(s => s.email === email)) {
    return res.status(400).json({ error: 'Aluno já cadastrado' });
  }
  const student = { id: Date.now().toString(), name, email, password };
  students.push(student);
  res.status(201).json({ message: 'Aluno registrado' });
}

function login(req, res) {
  const { email, password } = req.body;
  const student = students.find(s => s.email === email && s.password === password);
  if (!student) {
    return res.status(401).json({ error: 'Credenciais inválidas' });
  }
  const token = jwt.sign({ id: student.id, role: 'student' }, SECRET);
  res.json({ token });
}

module.exports = { register, login };
