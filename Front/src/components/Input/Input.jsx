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
    if (task.text.length > 0) {
      dispatch(createTask(task))
      setTask({ text: '' })
    }
  }


  return (
      <div className={style.MainDiv}>
          <input
            className={style.input}
            onChange={handleChange}
            type="text" 
            placeholder="Enter new task..."
            value={task.text}
            maxLength={70}
          />
          <button className={style.Enterbutton} onClick={handleClick}><i className="fas fa-pencil-alt"></i></button>
      </div>
  )
}