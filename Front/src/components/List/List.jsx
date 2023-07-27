import Card from "../Card/Card"
import style from "./List.module.css"
import { useSelector } from "react-redux"

export default function List ({tasks}) {


  const taskcheck = useSelector((state) => state.tasks)

  return (
      <div >
        {taskcheck.length > 0 ? <h1>To Do</h1> : null}
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