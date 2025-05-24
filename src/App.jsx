import { useEffect, useState } from 'react';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import { v4 } from 'uuid';

function App() {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks])

    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10', {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             }
    //         });
    //         const data = await response.json();

    //         setTasks(data);
    //     }

    //     fetchData()
    // }, [])

    function toggleTask(taskId) {
        const newTasks = tasks.map(task => {
            if(task.id == taskId) {
                return { ...task, isCompleted: !task.isCompleted }
            }

            return task;
        })

        setTasks(newTasks);
    }

    function deleteTask(taskId) {
        const newTasks = tasks.filter(task => task.id != taskId);
        setTasks(newTasks);
    }

    function addTask(title, description) {
        const newTask = {
            id: v4(),
            title,
            description,
            isCompleted: false,
        }

        setTasks([...tasks, newTask]);
    }

    return (
        <div className="w-screen h-screen bg-zinc-800 flex justify-center p-6">
            <div className="w-[500px] space-y-4">
                <h1 className="text-3xl text-zinc-100 font-bold text-center">Gerenciador de Tarefas</h1>
                <AddTask addTask={addTask} />
                <Tasks tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
            </div>
        </div>
    );
}

export default App;
