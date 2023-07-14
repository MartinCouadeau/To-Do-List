import { DELETE_TASK } from "./type"
import axios from "axios"



export function deleteTask(id) {
    return async function(dispatch) {
        await axios.delete(`http://localhost:3001/task/${id}`)
        return dispatch({
            type: DELETE_TASK,
            payload: id
        })
    }
}