import {
  CREATE_TASK,
  GET_TASK,
  GET_DONE,
  IS_DONE,
  EDIT_TASK,
  DELETE_TASK
} from "../actions/type"


const initialState = {
  tasks: [],
  allTasks: [],
  done: []
}


export default function rootReducer(state=initialState, action) {
  switch (action.type) {
    case 1:
      return ("S")
  }
}