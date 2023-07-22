const  { Task } = require("../../db")


const createTask = async (req, res) => {
  try {
      const {
        text,
        done
      } = req.body
      const newTask = await Task.create({
        text,
        done
      })

      res.status(200).send(newTask)
  } catch (error) {
      res.status(404).json({error:error.message})
  }
}

module.exports = {
  createTask
}