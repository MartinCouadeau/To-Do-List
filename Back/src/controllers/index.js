const { createTask } = require("./tasks/createTask")
const { getTask } = require("./tasks/getTasks")
const { getDone } = require("./tasks/getDone")
const { isDone } = require("./tasks/isDone")


module.exports = {
  createTask,
  getTask,
  getDone,
  isDone
}