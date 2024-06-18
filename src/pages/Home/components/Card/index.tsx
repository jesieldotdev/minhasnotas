import { Check, Trash } from "lucide-react"
import { useState } from "react"
import { Task } from "../../../../models/models"
import dayjs from "dayjs"
import 'dayjs/locale/pt-br'; // Importa o locale pt-br

dayjs.locale('pt-br');
interface CardProps {
    todo: Task
}

export const Card = ({ todo }: CardProps) => {
    const [done, setDone] = useState(todo.status === 'completed')

    async function onChangeState() {
        setDone(!done)
        await fetch(`http://localhost:3000/tasks/${todo.id}`, {
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





    return (
        <div onClick={() => onChangeState()} className="flex mb-2 justify-between border-zinc-400 border-2 rounded-md p-4">
            <div>
                <p className="font-semibold text-zinc-600">{todo?.title}</p>
                <p className="mt-6 text-xs text-slate-400">{dayjs(todo?.createdAt).format(`DD [de] MMMM HH:m`)}</p>
            </div>
            {/* <div className="flex flex-col justify-between "> */}
            {
                done ? <Check /> : null
            }

            {/* <Trash className="mt-auto w-5 h-5 text-zinc-800" /> */}
        </div>

        // </div>
    )
}