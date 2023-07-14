import { GET_TASK } from "./type"
import axios from "axios"



export function getTask(task) {
    return async function(dispatch) {
        await axios.get("http://localhost:3001/task", task)
        return dispatch({
            type: GET_TASK,
            payload: task
        })
    }
}