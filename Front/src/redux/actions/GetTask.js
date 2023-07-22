import { GET_TASK } from "./type"
import axios from "axios"



export function getTask() {
    return async function(dispatch) {
        const json = await axios.get("http://localhost:3001/task")
        return dispatch({
            type: GET_TASK,
            payload: json.data
        })
    }
}