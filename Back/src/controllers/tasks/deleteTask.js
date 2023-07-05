const { Task } =require("../../db")

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params

        await Task.destroy(
          {
            where: {
              id: id
            }
          }
        )
        return res.status(200).send("The task was succefully deleted")

    } catch (error) {
        res.status(404).send({error:error.message})
    }
}

module.exports = {
  deleteTask
}