import Card from "../Card/Card"
import style from "./doneList.module.css"

export default function Donelist () {

  return (
      <div className={style.MainDiv}>
        <h1>Done</h1>
          <Card/>
      </div>
  )
}