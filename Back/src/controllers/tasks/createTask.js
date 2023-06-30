const  { Task } = require("../../db")


const createTask = async (req, res) => {
  try {
      const {
        text
      } = req.body
      console.log(text)
      const newTask = await Task.create({
        text
      })

      res.status(200).send(newTask)
  } catch (error) {
      res.status(404).json({error:error.message})
  }
}

module.exports = {
  createTask
}