import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'Doctors appointment',
        day: 'Feb 5th at 2:30',
        reminder: true,
    },
    {
        id:2,
        text: 'Assignment',
        day: 'Feb 4th at 12:30',
        reminder: true,
    },
    {
        id:3,
        text: 'Clean Room',
        day: 'Feb 7th at 4:30',
        reminder: false,
    },
])
// delete task
  const deleteTask = (id) =>{
    console.log('delete')
    setTasks(tasks.filter((task) => task.id !== id))
}
// toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      {/* <Header title="Hello World"/> */}
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No task'}
    </div>
  );
}

export default App;
