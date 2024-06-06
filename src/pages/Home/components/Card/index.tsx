import { Check } from "lucide-react"

interface CardProps {

}

export const Card = () => {
    return (
        <div className="flex justify-between border-slate-300 border-2 rounded-md p-4">
            <div>
                <p className="font-medium ">Organize seu app baba bababa</p>
                <p className="mt-6 text-sm text-slate-500">15 janeiro 2024 10:00 AM</p>
            </div>
            <Check />

        </div>
    )
}