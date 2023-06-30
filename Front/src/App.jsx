import './App.css'
import List from './components/List/List'
import Input from './components/Input/Input'
import styles from './App.css'

function App() {

  return (
    <div className={styles.mainDiv}>
      <h1>To Do List</h1>
      <div>
        <Input/>
      </div>
      <div>
        <List/>
      </div>
    </div>
  )
}

export default App
