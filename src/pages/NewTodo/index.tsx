import { X } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ActionButton } from "./components/ActionButton"
import { useAppContext } from "../../context/AppContext"
import { enqueueSnackbar, SnackbarProvider } from "notistack"

export const NewTodo = () => {
    const route = useNavigate()
    const [description, setDescription] = useState(String)

    function onClose() {
        route('/')
        return
    }

    const date = new Date()
    const { setTasks, user } = useAppContext()

    const addTodo = () => {
        if(description === '' || description === undefined) return enqueueSnackbar('O campo não pode ficar vazio!')
        fetch(`${import.meta.env.VITE_API_URL}/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: description, createdAt: date, author: user?.email }),
        })
            .then(response => response.json())
            .then(data => {
                setTasks(prev => {

                    return [...prev, data]
                })
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        onClose()
    };

    return (

        

        <div className="px-6 pt-8 space-y-2 h-full">
                <SnackbarProvider />
               
            <div className="flex justify-between items-center mb-8">
                <p className="text-3xl font-bold text-zinc-700">Nova tarefa</p>
                <X onClick={() => onClose()} className="w-10 h-10" />



            </div>
            <textarea
                autoFocus
                value={description}
                onChange={(e) => setDescription(e.currentTarget.value)}
                className="bg-inherit flex w-full rounded h-64  border-zinc-400 border-2 p-4 font-medium text-lg align-baseline pb-16"
                placeholder="O que precisa ser feito?"

            />

            <div className="h-4" />

            {/* <div className="flex w-full h-16 p-4 border-2 border-zinc-400 rounded mt-16">
                <p className="text-zinc-400">Escolha o dia e hora</p>
            </div> */}
            <ActionButton title="Salvar" onClick={() => addTodo()} />

        </div>



    )
}