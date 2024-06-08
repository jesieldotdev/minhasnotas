import { Check } from "lucide-react"
import { useState } from "react"
import { Task } from "../../../../models/models"
import dayjs from "dayjs"
import 'dayjs/locale/pt-br'; // Importa o locale pt-br

dayjs.locale('pt-br');
interface CardProps {
    todo: Task
}

export const Card = ({ todo }: CardProps) => {
    const [done, setDone] = useState(todo.done)

    async function onChangeState() {
        setDone(!done)
        await fetch(`http://localhost:3000/tasks/${todo.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                done: !done,
            }),
        })
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(error => console.error('Erro ao atualizar os dados:', error));
        return
    }





    return (
        <div onClick={() => onChangeState()} className="flex justify-between border-zinc-400 border-2 rounded-md p-4">
            <div>
                <p className="font-semibold text-zinc-600">{todo.description}</p>
                <p className="mt-6 text-xs text-slate-400">{dayjs(todo?.date).format(`d [de] MMMM hh:mm`)}</p>
            </div>
            {
                done ? <Check /> : null
            }


        </div>
    )
}