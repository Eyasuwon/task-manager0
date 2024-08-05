const jwt = require('jsonwebtoken');
const pool = require('../config/db');

const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  try {
    const decoded = jwt.verify(token, 'your_jwt_secret');
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [decoded.id]);
    if (result.rows.length > 0) {
      req.user = result.rows[0];
      next();
    } else {
      res.status(401).send('Invalid token');
    }
  } catch (error) {
    res.status(401).send('Invalid token');
  }
};

module.exports = authMiddleware;
