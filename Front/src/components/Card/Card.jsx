import { deleteTask } from "../../redux/actions/DeleteTask"
import { isDone } from "../../redux/actions/IsDone"
import { useDispatch } from "react-redux"

export default function Card ({
   id,
   text
   }) {


   const dispatch = useDispatch()

   
   function handleDone (event) {
      event.preventDefault();
      dispatch(isDone(id))
      window.location.reload() 
   }


   function handleDelete (event) {
      event.preventDefault();
      dispatch(deleteTask(id))
      alert("Task successfully deleted")
      window.location.reload() 
   }


  return (
      <div >
         <div>
            <h3>{text}</h3>
            <button onClick={handleDone}>Done</button>
            <button onClick={handleDelete}>Delete</button>
         </div>
      </div>
  )
}