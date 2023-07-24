const { Task } =require("../../db")

const isDone = async (req, res) => {
    try {
        const { id } = req.params

        const {
          text,
          done
        } = await Task.findByPk(id)

        await Task.update(
          {
            text,
            done: !done
          }, {
            where: {
              id: id
            }
          }
        )
        return res.status(200).send({
          id,
          text,
          done: !done
        })

    } catch (error) {
        res.status(404).send({error:error.message})
    }
}

module.exports = {
    isDone
}