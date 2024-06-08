import { X } from "lucide-react"
import { useNavigate } from "react-router-dom"

export const NewTodo = () => {
    const route = useNavigate()

    function onClose() {
        route('/')
        return
    }
    return (
        <div className="px-6 pt-8 space-y-2 h-full">
            <div className="flex justify-between items-center mb-8">
                <p className="text-4xl font-bold text-zinc-700">Nova tarefa</p>
                <X onClick={()=>onClose()} className="w-10 h-10" />



            </div>
            <textarea
                className="bg-inherit flex w-full rounded   border-zinc-400 border-2 p-4 font-medium text-lg align-baseline pb-16"
                placeholder="O que precisa ser feito?"

            />

            <div className="flex w-full h-16 p-4 border-2 border-zinc-400 rounded mt-16">
                <p className="text-zinc-400">Escolha o dia e hora</p>
            </div>
        </div>)
}