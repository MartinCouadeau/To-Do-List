import {
  CREATE_TASK,
  GET_TASK,
  GET_DONE,
  IS_DONE,
  EDIT_TASK,
  DELETE_TASK
} from "../actions/type.jsx"


const initialState = {
  tasks: [],
  allTasks: [],
  done: []
}


export default function rootReducer(state=initialState, action) {
  switch (action.type) {
    
    case CREATE_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      }
    case GET_TASK:
      return {
        ...state,
        tasks: action.payload,
        allTasks: action.payload
      }
    case GET_DONE:
      return {
        ...state,
        done: action.payload
      }
    case IS_DONE:
      return {
        ...state,
        tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload.payload : task),
        allTasks: state.allTasks.map(task => task.id === action.payload.id ? action.payload.payload : task)
      }
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload.payload : task),
        allTasks: state.allTasks.map(task => task.id === action.payload.id ? action.payload.payload : task)
      }
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
        allTasks: state.allTasks.filter(task => task.id !== action.payload)
      }
    default:
      return state;
  }
}