import Card from "../Card/Card"
import style from "./doneList.module.css"

export default function Donelist ({tasks}) {

  return (
      <div className={style.MainDiv}>
        <h1>Done</h1>
        {tasks.length > 0 ? tasks?.map((task) => {
        return (
          <Card
            key={task.id ? task.id : index}
            id = {task.id}
            text = {task.text}
            />
        )
      }) : "" }
      </div>
  )
}