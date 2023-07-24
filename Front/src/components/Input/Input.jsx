import style from "./Input.module.css"
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from "../../redux/actions/CreateTask"

export default function Input () {


  const dispatch = useDispatch()
  const [task, setTask] = useState({
    text: ""
  })


  const handleChange = (event) => {
    setTask({
      ...task,
      text : event.target.value
    })
  }

  function handleClick () {
    dispatch(createTask(task))
    setTask({ text: '' })
  }


  return (
      <div className={style.MainDiv}>
          <input
            onChange={handleChange}
            type="text" 
            placeholder="Enter task"
            value={task.text}
          />
          <button onClick={handleClick}>Create</button>
      </div>
  )
}