const express = require('express');
const { create, list, remove } = require('../controllers/taskController');
const authMiddleware = require('../backend/middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, create);
router.get('/', authMiddleware, list);
router.delete('/:id', authMiddleware, remove);

module.exports = router;
