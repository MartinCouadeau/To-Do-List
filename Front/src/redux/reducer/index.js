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
  done: []
}


export default function rootReducer(state=initialState, action) {
  switch (action.type) {
    
    case CREATE_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload.data]
      }
    case GET_TASK:
      return {
        ...state,
        tasks: action.payload
      }
    case GET_DONE:
      return {
        ...state,
        done: action.payload
      }
    case IS_DONE:
      if (action.payload.data.done) {
        return {
          ...state,
          tasks: state.tasks.filter(task => task.id !== action.payload.data.id),
          done:[...state.done, action.payload.data]
        }
      } else {
        return {
          ...state,
          done: state.done.filter(task => task?.id !== action.payload.data?.id),
          tasks:[...state.tasks, action.payload.data]
        }
      }
      
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload.payload : task),
      }
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
        done: state.done.filter(task => task.id !== action.payload),
      }
    default:
      return state;
  }
}