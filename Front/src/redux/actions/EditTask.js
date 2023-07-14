import { EDIT_TASK } from "./type"
import axios from "axios"



export function editTask(task, id) {
    return async function(dispatch) {
        await axios.put(`http://localhost:3001/task/edit/${id}`, task)
        return dispatch({
            type: EDIT_TASK,
            payload: {
              task,
              id
            }
        })
    }
}