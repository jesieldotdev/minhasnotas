import { Archive, Check, Trash } from "lucide-react"
import { useState } from "react"
import { Task } from "../../../../models/models"
import dayjs from "dayjs"
import 'dayjs/locale/pt-br'; // Importa o locale pt-br
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../../../context/AppContext";

dayjs.locale('pt-br');
interface CardProps {
    todo: Task
}



export const Card = ({ todo }: CardProps) => {
    const { fetchTasks } = useAppContext()
    const [done, setDone] = useState(todo.status === 'completed')

    async function onChangeState() {
        setDone(!done)
        await fetch(`${import.meta.env.VITE_API_URL}/tasks/${todo.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                status: !done,
            }),
        })
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(error => console.error('Erro ao atualizar os dados:', error));
        return
    }

    async function onRemoveTask() {
        setDone(!done)
        await fetch(`${import.meta.env.VITE_API_URL}/tasks/${todo.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(error => console.error('Erro ao atualizar os dados:', error));
        fetchTasks()
    }





    return (
        <div className={`flex mb-2 justify-between rounded-lg p-4 m-1 bg-white cursor-pointer shadow-sm h-fit ${done ? '' : ''}`}>
            <div onClick={() => onChangeState()}>
                <p className={`font-semibold text-zinc-600 p-2  ${done ? `line-through` : ''}`}>{todo?.title}</p>
                <p className="font-normal text-zinc-600 p-2 whitespace-normal overflow-hidden">
                    {todo?.description}
                </p>

                <div className={`font-normal text-sm  p-2 overflow-ellipsis text-green-400 ${done ? `line-through` : ''}`}>{todo?.tags.map(item => <p>#{item}</p>)}</div>
                <p className="mt-6 text-xs text-slate-400">{dayjs(todo?.startDate).format(`DD [de] MMMM HH:m`)}</p>
            </div>
            <div className="flex flex-col justify-between ">
                {
                    done ? <div className="bg-iphone-blue text-iphone-white rounded-full p-1"><Check size={18} /></div> : null
                }

                <Archive onClick={() => onRemoveTask()} className="mt-auto w-5 h-5 text-zinc-800" />
            </div>

        </div>
    )
}