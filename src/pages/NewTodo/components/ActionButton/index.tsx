interface ActionButtonProps {
    title: string
    onClick: () => void
}

export const ActionButton = ({ onClick, title }: ActionButtonProps) => {
    return (
        <button onClick={()=> onClick()} className="bg-zinc-900 lg: max-w-56 rounded w-full flex text-zinc-100 font-semibold text-2xl text-center justify-center p-2 mt-auto">
                {title}
        </button>
    )
}