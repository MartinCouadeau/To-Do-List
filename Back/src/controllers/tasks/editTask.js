const { Task } =require("../../db")

const editTask = async (req, res) => {
    try {
        const { id } = req.params

        const {
          text,
          done
        } = req.body


        await Task.update(
          {
            text,
            done
          }, {
            where: {
              id: id
            }
          }
        )
        return res.status(200).send("The task was succefully updated")

    } catch (error) {
        res.status(404).send({error:error.message})
    }
}

module.exports = {
  editTask
}