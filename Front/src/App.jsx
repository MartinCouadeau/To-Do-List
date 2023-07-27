import './App.css'
import List from './components/List/List'
import Input from './components/Input/Input'
import Donelist from './components/Donelist/Donelist'
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from 'react';
import { getTask } from './redux/actions/GetTask'
import { getDone } from './redux/actions/GetDone'

export default function App() {

  
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true);
  const tasks = useSelector((state) => state.tasks)
  const tasksDone = useSelector((state) => state.done)

  useEffect(() => {
    dispatch(getTask())
    dispatch(getDone())
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  },[dispatch])

  if (isLoading) {
    return <div>Loading...</div>;
  }


  return (
    <div id='MainDiv'>
      <div id='Tittle'>
        <h1>To-Do List</h1>
        <Input/>
      </div>
      <div id='task-list'>
        <List tasks = {tasks}/>
      </div>
      <div id='done-list'>
        <Donelist tasks = {tasksDone}/>
      </div>
    </div>
  )
}
