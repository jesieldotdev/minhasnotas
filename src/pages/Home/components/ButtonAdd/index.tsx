import { Plus } from "lucide-react"


interface AddButtonProps{

}

export const AddButton = () => {
    return (
        <button className="bg-zinc-900 p-4">
            <Plus className="text-slate-100"/>

        </button>
    )
}