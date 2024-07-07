import { ArrowDownNarrowWide } from "lucide-react"

interface ActionsProps {
    options: string[]
    isReverseOrder: boolean
    toggleOption: (option: string) => void
    changeOrder: ()=>void
    selectedOptions :string[]
}

export const Actions = ({
    options,
    changeOrder,
    isReverseOrder,
    toggleOption,
    selectedOptions
 }: ActionsProps) => {
    return (
        <div className="flex justify-between mb-4 ">
            <div className="flex flex-wrap gap-2">
                {options.map((option, index) => (
                    <div
                        key={index}
                        className={`px-3 py-1 bg-blue-sec text-iphone-blue-2 text-sm font-medium rounded-full cursor-pointer hover:bg-blue-600 ${selectedOptions.includes(option) ? 'bg-blue-600' : ''
                            }`}
                        onClick={() => toggleOption(option)}
                    >
                        {option}
                    </div>
                ))}
            </div>
            <button onClick={() => changeOrder()}> <ArrowDownNarrowWide
                className={isReverseOrder ? 'text-slate-600' : ''}
            /></button>
        </div>

    )
}