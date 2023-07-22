import { GET_DONE } from "./type"
import axios from "axios"



export function getDone() {
    return async function(dispatch) {
        const json = await axios.get("http://localhost:3001/task/done")
        return dispatch({
            type: GET_DONE,
            payload: json.data
        })
    }
}