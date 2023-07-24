import { CREATE_TASK } from "./type"
import axios from "axios"



export function createTask(task) {
    console.log(task)
    return async function(dispatch) {
        await axios.post("http://localhost:3001/task", task)
        return dispatch({
            type: CREATE_TASK,
            payload: task
        })
    }
}