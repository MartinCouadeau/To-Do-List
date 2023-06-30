const { getDBData } = require("../data/getDBData")


const getDone = async (req,res) => {
  try {
    const tasks = await getDBData()

    let tasksDone = await tasks.filter(el => el.done === true)

    res.status(200).send(tasksDone)

  } catch (error) {
    res.status(404).json({error:error.message})
  }
}


module.exports = {
  getDone
}