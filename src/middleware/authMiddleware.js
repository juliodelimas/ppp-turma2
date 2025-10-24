const jwt = require('jsonwebtoken');
const SECRET = 'supersecret';

function authenticateInstructor(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Token não fornecido' });
  try {
    const payload = jwt.verify(token, SECRET);
    if (payload.role !== 'instructor') return res.status(403).json({ error: 'Acesso negado' });
    req.user = payload;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Token inválido' });
  }
}

function authenticateStudent(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Token não fornecido' });
  try {
    const payload = jwt.verify(token, SECRET);
    if (payload.role !== 'student') return res.status(403).json({ error: 'Acesso negado' });
    req.user = payload;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Token inválido' });
  }
}

module.exports = { authenticateInstructor, authenticateStudent, SECRET };
