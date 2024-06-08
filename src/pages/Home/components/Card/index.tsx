import { Check } from "lucide-react"
import { useState } from "react"

interface CardProps {
    isChecked?: boolean
    description: string,
    id: number | string
}

export const Card = ({ isChecked, description, id }: CardProps) => {
    const [done, setDone] = useState(isChecked)

   async function onChangeState() {
        setDone(!done)
      await  fetch(`http://localhost:3000/tasks/${id}`, {
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
        <div onClick={() => onChangeState()} className="flex justify-between border-slate-300 border-2 rounded-md p-4">
            <div>
                <p className="font-medium ">{description}</p>
                <p className="mt-6 text-sm text-slate-500">15 janeiro 2024 10:00 AM</p>
            </div>
            {
                done ? <Check /> : null
            }


        </div>
    )
}