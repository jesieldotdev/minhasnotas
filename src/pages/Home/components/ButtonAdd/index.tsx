import { Plus } from "lucide-react"


interface AddButtonProps {
    onClick: () => void
}

export const AddButton = ({ onClick }: AddButtonProps) => {
    return (
        <button onClick={() => onClick()} className="bg-blue-sec text-iphone-blue-2 p-4 rounded-full flex gap-2 justify-center">
            <Plus className="text-iphone-blue-2" />

            <p className="font-medium">Nova Tarefa</p>

        </button>
    )
}