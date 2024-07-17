import React from "react"
import SearchInput from "../../../../components/Search"
import { Menu, Search } from "lucide-react"
import { useAppContext } from "../../../../context/AppContext"

interface HeaderProps {
    className?: string
}

export const HeaderMobile = ({ logout, className }: HeaderProps) => {
    const [showSearchInput, setShowSearchInput] = React.useState<boolean>(false)
    const {
        isSidebarOpen,
        setIsSidebarOpen
    } = useAppContext()


    return (
        <>  <header className={`flex justify-between items-center mb-0 border-b p-4  ${className}`}>
            <div className={`flex items-center  justify-between gap-2 ${className} w-full`}>

                <button className=" p-2 rounded">
                    <Menu onClick={() => setIsSidebarOpen(true)} className="" />
                </button>


                {
                    showSearchInput ? <SearchInput className="" /> :

                        <div className="flex justify-between w-full ">


                            <p className="text-xl font-light">Organize<span className="font-semibold text-slate-600">GO</span></p>
                            <button className="ml-auto px-2" onClick={() => setShowSearchInput(true)}><Search /></button>

                        </div>
                }
                {/* </div> */}
            </div>
        </header>

        </>
    )
}