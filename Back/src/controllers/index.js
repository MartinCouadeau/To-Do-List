const { createTask } = require("./tasks/createTask")
const { getTask } = require("./tasks/getTasks")
const { getDone } = require("./tasks/getDone")
const { isDone } = require("./tasks/isDone")
const { editTask } = require("./tasks/editTask")
const { deleteTask } = require("./tasks/deleteTask")



module.exports = {
  createTask,
  getTask,
  getDone,
  isDone,
  editTask,
  deleteTask
}