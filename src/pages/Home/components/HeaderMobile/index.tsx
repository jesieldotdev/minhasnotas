import { HeartPulse, LogOut } from "lucide-react"

interface HeaderProps {
    logout: () => void
    className?: string
}

export const HeaderMobile = ({ logout, className }: HeaderProps) => {
    return (
        <>  <header className={`flex justify-between items-center mb-0 border-b p-4 ${className}`}>
            <div className={`flex items-center  gap-2 ${className}`}>
                <div className="bg-blue-sec p-2 rounded">
                    <HeartPulse className="min-h-6 min-w-6 text-iphone-blue-2 " />
                </div>
                <p className="text-xl font-light">Agenda<span className="font-semibold text-slate-600">ACS</span></p>
                {/* <button onClick={() => logout()}><LogOut /></button> */}
            </div>
            <button onClick={() => logout()}><LogOut /></button>
        </header>

        </>
    )
}