import { Plus } from "lucide-react"


interface AddButtonProps {
    onClick: () => void
}

export const AddButton = ({ onClick }: AddButtonProps) => {
    return (
        <button onClick={()=>onClick()} className="bg-zinc-900 p-4 rounded">
            <Plus className="text-slate-100" />

        </button>
    )
}