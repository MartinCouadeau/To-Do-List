import Card from "../Card/Card"
import style from "./List.module.css"

export default function List () {

  return (
      <div className={style.MainDiv}>
        <h1>Tasks</h1>
          <Card/>
      </div>
  )
}