export default function Card () {


  return (
      <div >
         <div><h1>Card</h1></div>
         <div>
            <button onClick={console.log("crea logica edit")}>Edit</button>
            <button onClick={console.log("crea logica Done")}>Done</button>
            <button onClick={console.log("crea logica delete")}>Delete</button>
         </div>
      </div>
  )
}