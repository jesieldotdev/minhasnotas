import { useAppContext } from "../../../../context/AppContext"
import { Task } from "@/models/models"
import { useState } from "react"

interface ControllerCardProps{
    todo: Task
}

export const ControllerCard = ({
    todo
}:ControllerCardProps) => {

    const { fetchTasks, setSearchText } = useAppContext()
    const [done, setDone] = useState(todo.status === 'completed')

    function tagSearch(item: string){
        setSearchText(item)
    }

    async function onChangeState() {
        setDone(!done)
        await fetch(`${import.meta.env.VITE_API_URL}/tasks/${todo.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                status: done ? 'incompleted' : 'completed',
            }),
        })
            .then(res => res.json())
            .catch(error => console.error('Erro ao atualizar os dados:', error));
        return fetchTasks()
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
            .catch(error => console.error('Erro ao atualizar os dados:', error));
        fetchTasks()
    }




    return {
        onRemoveTask,
        onChangeState,
        done,
        tagSearch
    }
}