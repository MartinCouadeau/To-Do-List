const { Router } = require("express");
const { 
    createTask,
    //getTask,
} = require("../controllers/index")


const router = Router();



//router.get("/", getTask)
router.post("/",createTask)


module.exports = router