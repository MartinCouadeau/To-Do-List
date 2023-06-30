const { getDBData } = require("../data/getDBData")


const getTask = async (req,res) => {
  try {
    const tasks = await getDBData()

    res.status(200).send(tasks)
  } catch (error) {
    res.status(404).json({error:error.message})
  }
}


module.exports = {
  getTask
}