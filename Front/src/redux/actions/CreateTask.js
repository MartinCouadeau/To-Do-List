import { ADD_BREED } from "./type"
import axios from "axios"



export function createTask(task) {
    return async function(dispatch) {
        await axios.post("http://localhost:3001/task", task)
        return dispatch({
            type: ADD_BREED,
            payload: task
        })
    }
}