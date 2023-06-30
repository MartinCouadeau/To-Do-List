const { Router } = require("express");
const { 
    createTask,
    getTask,
    getDone,
    isDone
} = require("../controllers/index")


const router = Router();



router.get("/", getTask)
router.post("/",createTask)
router.put("/:id", isDone)
router.get("/done", getDone)



module.exports = router