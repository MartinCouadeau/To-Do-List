const { Router } = require("express");
const { 
    createTask,
    getTask,
    getDone,
    isDone,
    editTask,
    deleteTask
} = require("../controllers/index")


const router = Router();


router.post("/",createTask)
router.get("/", getTask)
router.get("/done", getDone)
router.put("/:id", isDone)
router.put("/:id", editTask)
router.delete("/:id", deleteTask)



module.exports = router