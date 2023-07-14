import { IS_DONE } from "./type"
import axios from "axios"



export function isDone(task,id) {
    return async function(dispatch) {
        await axios.put(`http://localhost:3001/task/${id}`, task)
        return dispatch({
            type: IS_DONE,
            payload: task
        })
    }
}