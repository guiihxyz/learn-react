import { useSearchParams } from "react-router-dom";

function TaskPage() {
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");

    return (
        <div className="w-screen h-screen bg-zinc-800 flex justify-center p-6">
            <div className="w-[500px] space-y-4">
                <h1 className="text-3xl text-zinc-100 font-bold text-center">Tarefa</h1>

                <p className="text-xl text-zinc-100 font-medium text-center">{title}</p>
                <p className="text-lg text-zinc-100 text-center">{description}</p>
            </div>
        </div>
    );
}

export default TaskPage;
