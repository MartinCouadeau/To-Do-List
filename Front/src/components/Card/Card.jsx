import { deleteTask } from "../../redux/actions/DeleteTask"
import { isDone } from "../../redux/actions/IsDone"
import { useDispatch } from "react-redux"
import style from "./Card.module.css"

export default function Card ({
   id,
   text
   }) {


   const dispatch = useDispatch()

   
   function handleDone (event) {
      event.preventDefault();
      dispatch(isDone(id))
   }


   function handleDelete (event) {
      event.preventDefault();
      dispatch(deleteTask(id))
   }


  return (
      <div >
         <div className={style.MainDiv}>
            <h3 className={style.text}>{text}</h3>
            <button className={style.btnDone} onClick={handleDone}><i className="fas fa-check"></i></button>
            <button className={style.btnDelete}onClick={handleDelete}><i className="fas fa-trash"></i></button>
         </div>
      </div>
  )
}