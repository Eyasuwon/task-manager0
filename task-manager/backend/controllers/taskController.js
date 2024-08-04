const { createTask, getTasksByUser, deleteTask } = require('../models/Task');

const create = async (req, res) => {
  const { title, description } = req.body;
  const task = await createTask(title, description, req.user.id);
  res.json(task);
};

const list = async (req, res) => {
  const tasks = await getTasksByUser(req.user.id);
  res.json(tasks);
};

const remove = async (req, res) => {
  await deleteTask(req.params.id, req.user.id);
  res.status(204).send();
};

module.exports = { create, list, remove };
