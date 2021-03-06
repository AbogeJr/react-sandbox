import './index.css'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useEffect, useState } from 'react'


function App() {

  const [showAdd, setShowAdd] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(()=>{
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])


const fetchTasks = async () => {
  const res = await fetch("http://localhost:5000/tasks")
  const data = await res.json()

  return data
}

const fetchTask = async (id) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`)
  const data = await res.json()

  return data
}

const addTask = async (task) => {
  const res = await fetch(`http://localhost:5000/tasks/`, 
  {method: "POST",
   headers: {
    'Content-type': 'Application/json'
   },
   body: JSON.stringify(task)})

   const data = await res.json()
  // const id = Math.floor(Math.random() * 1000) +1
  // const new_task = {id, ...task}
  setTasks([...tasks, data])
}

const deleteTask = async (id) => {
  await fetch(`http://localhost:5000/tasks/${id}`, {method: "DELETE",})
  setTasks(tasks.filter((task) => task.id !== id))
}

const toggleReminder = async (id) => {

  const taskToToggle = await fetchTask(id)
  const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}
  const res = await fetch(`http://localhost:5000/tasks/${id}`, 
  {method: "PUT",
   headers: {'Content-type': 'Application/json'},
   body: JSON.stringify(updTask)})

   const data = await res.json()

  setTasks(tasks.map((task) => 
    task.id === id ? {...task, reminder: !data.reminder} : task
  ))
}

  return (
    <div className="container">
      <Header title="Task Tracker" onAdd={()=>setShowAdd(!showAdd)} show={showAdd} />
      {showAdd && < AddTask onAdd={addTask} />}
      { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "No Tasks"}
    </div>
  );

}

export default App;