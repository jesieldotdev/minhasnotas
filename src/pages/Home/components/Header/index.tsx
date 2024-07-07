import { ClipboardCheck, LogOut } from "lucide-react"

interface HeaderProps {
    className?:string
}

export const Header = ({  className }: HeaderProps) => {
    return (
        <header className={`flex items-center mb-4 p-4 gap-2 ${className}`}>
            <div className="bg-zinc-600 p-2 rounded">
            <ClipboardCheck className="min-h-6 min-w-6 text-white "/>
            </div>
            <p className="text-xl font-light">Agenda<span className="font-semibold text-slate-600">ACS</span></p>
            {/* <button onClick={() => logout()}><LogOut /></button> */}
        </header>

        
    )
}