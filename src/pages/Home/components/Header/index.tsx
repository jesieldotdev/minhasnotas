import { ClipboardCheck, HeartPulse, LogOut } from "lucide-react"

interface HeaderProps {
    className?:string
}

export const Header = ({  className }: HeaderProps) => {
    return (
        <header className={`flex items-center mb-4 p-4 gap-2 ${className}`}>
            <div className="bg-blue-sec p-2 rounded">
            <HeartPulse className="min-h-6 min-w-6 text-iphone-blue-2 "/>
            </div>
            <p className="text-xl font-light">Agenda<span className="font-semibold text-slate-600">ACS</span></p>
        </header>

        
    )
}