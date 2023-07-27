import Card from "../Card/Card"
import style from "./doneList.module.css"
import { useSelector } from "react-redux"

export default function Donelist ({tasks}) {

  const taskcheck = useSelector((state) => state.done)

  return (
      <div>
        {taskcheck.length > 0 ? <h1>Done</h1> : null}
        <div>
          {tasks.length > 0 ? tasks?.map((task, index) => {
          return (
            <Card
              key={task.id ? task.id : index}
              id = {task.id}
              text = {task.text}
              />
            )
          }) : "" }
        </div>
       
      </div>
  )
}