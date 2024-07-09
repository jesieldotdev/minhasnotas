import React from "react"
import SearchInput from "../../../../components/Search"
import { Ellipsis, HeartPulse, LogOut, Menu, Search } from "lucide-react"

interface HeaderProps {
    logout: () => void
    className?: string
}

export const HeaderMobile = ({ logout, className }: HeaderProps) => {
    const [showSearchInput, setShowSearchInput] = React.useState<boolean>(false)
    return (
        <>  <header  className={`flex justify-between items-center mb-0 border-b p-4  ${className}`}>
            <div  className={`flex items-center  justify-between gap-2 ${className} w-full`}>

                <button className=" p-2 rounded">
                    <Menu className="" />
                </button>

                {/* <div className="flex w-full  "> */}

                {
                    showSearchInput ? <SearchInput className="" /> :

                        <div className="flex justify-between w-full ">


                            <p className="text-xl font-light">Agenda<span className="font-semibold text-slate-600">ACS</span></p>
                            <button className="ml-auto px-2" onClick={() => setShowSearchInput(true)}><Search /></button>

                        </div>
                }
                {/* </div> */}
            </div>
        </header>

        </>
    )
}