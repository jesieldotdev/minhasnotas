import { Header } from "../../pages/Home/components/Header"
import Menu from "../../pages/Home/components/Menu"

interface SideBarProps {
    className?: string
}

export const SideBar = ({className}:SideBarProps) => {
    return (
        <aside className={className}>

            <Menu />
        </aside>
    )
}