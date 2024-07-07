import { LogOut } from "lucide-react"

interface HeaderProps {
    logout: () => void
    className?:string
}

export const HeaderMobile = ({ logout, className }: HeaderProps) => {
    return (
        <>  <div className={`flex justify-between items-center mb-4 p-4 ${className}`}>
            <p className="text-3xl font-light">Agenda<span className="font-semibold text-slate-600">ACS</span></p>
            <button onClick={() => logout()}><LogOut /></button>
        </div>

        </>
    )
}