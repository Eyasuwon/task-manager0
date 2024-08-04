const pool = require('../config/db');

const createTask = async (title, description, userId) => {
  const result = await pool.query(
    'INSERT INTO tasks (title, description, user_id) VALUES ($1, $2, $3) RETURNING *',
    [title, description, userId]
  );
  return result.rows[0];
};

const getTasksByUser = async (userId) => {
  const result = await pool.query('SELECT * FROM tasks WHERE user_id = $1', [userId]);
  return result.rows;
};

const deleteTask = async (taskId, userId) => {
  await pool.query('DELETE FROM tasks WHERE id = $1 AND user_id = $2', [taskId, userId]);
};

module.exports = { createTask, getTasksByUser, deleteTask };
