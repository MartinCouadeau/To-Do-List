import './App.css'
import List from './components/List/List'
import Input from './components/Input/Input'
import Donelist from './components/DoneList/doneList'

function App() {

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
