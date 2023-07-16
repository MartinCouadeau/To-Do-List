import './App.css'
import List from './components/List/List'
import Input from './components/Input/Input'
import Donelist from './components/DoneList/doneList'
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from 'react';
import { getTask } from './redux/actions/GetTask'

function App() {

  
  const dispatch = useDispatch()
  //const allTasks = useSelector((state) => state.tasks)

  useEffect(() => {
    dispatch(getTask())
  },[])


  return (
    <div>
      <h1>To Do List</h1>
      <div>
        <Input/>
      </div>
      <div>
        <List/>
      </div>
      <div>
        <Donelist/>
      </div>
    </div>
  )
}

export default App
