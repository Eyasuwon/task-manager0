const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgresql',
  host: 'localhost',
  database: 'task_manager',
  password: 'ew@3052!',
  port: 5432,
});

module.exports = pool;
