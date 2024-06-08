import { Check } from "lucide-react"
import { useState } from "react"

interface CardProps {
    isChecked: boolean
}

export const Card = ({ isChecked }: CardProps) => {
    const [done, setDone] = useState(false)

    function onChangeState() {
        setDone(!done)
        return
    }
    return (
        <div onClick={() => onChangeState()} className="flex justify-between border-slate-300 border-2 rounded-md p-4">
            <div>
                <p className="font-medium ">Organize seu app baba bababa</p>
                <p className="mt-6 text-sm text-slate-500">15 janeiro 2024 10:00 AM</p>
            </div>
            {
                done ? <Check /> : null
            }


        </div>
    )
}