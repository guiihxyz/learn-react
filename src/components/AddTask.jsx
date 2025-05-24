import { useState } from 'react';

function AddTask({ addTask }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    return (
        <div>
            <div className="flex flex-col gap-2">
                <input
                    type="text"
                    placeholder="Digite o título da tarefa"
                    className="w-full px-3 py-2 rounded bg-zinc-700 text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500" value={title} onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Digite a descrição da tarefa"
                    className="w-full px-3 py-2 rounded bg-zinc-700 text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500" value={description} onChange={(e) => setDescription(e.target.value)}
                />
                <button onClick={() => {
                    if(!title.trim() || !description.trim()) {
                        return alert('Preencha todos os campos');
                    }

                    addTask(title, description);
                    setTitle('');
                    setDescription('');
                }} className="mt-2 px-4 py-2 rounded bg-green-600 hover:bg-green-500 text-zinc-100 font-semibold transition">
                    Adicionar Tarefa
                </button>
            </div>

        </div>
    );
}

export default AddTask;
