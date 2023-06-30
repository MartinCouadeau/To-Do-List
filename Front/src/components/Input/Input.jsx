import style from "./Input.module.css"

export default function Input () {


  return (
      <div className={style.MainDiv}>
          <input 
            type="text" 
            placeholder="Enter task"
          />
          <button>Create</button>
      </div>
  )
}