import { GET_DONE } from "./type"
import axios from "axios"



export function getDone(task) {
    return async function(dispatch) {
        await axios.get("http://localhost:3001/task/done", task)
        return dispatch({
            type: GET_DONE,
            payload: task
        })
    }
}