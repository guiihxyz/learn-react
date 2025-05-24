import { ChevronRightIcon, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, toggleTask, deleteTask }) {
    const navigate = useNavigate();

    function handleTaskClick(task) {
        const query = new URLSearchParams();
        query.set("title", task.title);
        query.set("description", task.description);

        navigate(`/task?${query.toString()}`);
    }

    return (
        <div>
            <ul className="p-4 bg-zinc-600 rounded space-y-2">
                {tasks.map((task) =>
                    <li className="flex gap-2" key={task.id} >
                        <button onClick={() => toggleTask(task.id)} className={`w-full bg-zinc-700 text-zinc-100 px-4 py-1.5 rounded ${task.isCompleted && "line-through"}`}>
                            {task.title}
                            </button>
                        <button onClick={() => handleTaskClick(task)} className="w-8 h-8 flex justify-center items-center bg-zinc-700 hover:bg-zinc-500 text-zinc-100 rounded">
                            <ChevronRightIcon className="w-4 h-4" />
                        </button>
                        <button onClick={() => deleteTask(task.id)} className="w-8 h-8 flex justify-center items-center bg-red-700 hover:bg-red-500 text-zinc-100 rounded">
                            <Trash className="w-4 h-4" />
                        </button>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Tasks;
