import { IS_DONE } from "./type"
import axios from "axios"



export function isDone(id) {
    return async function(dispatch) {
        const json = await axios.put(`http://localhost:3001/task/${id}`)
        return dispatch({
            type: IS_DONE,
            payload: json
        })
    }
}