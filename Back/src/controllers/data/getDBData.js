const  {Task } = require("../../db")


const getDBData = async () => {
    try {
        return await Task.findAll()
    } catch (error) {
        console.log(error.message)
    }
}


//getDBData().then(val => console.log(val))

module.exports = {
    getDBData
}