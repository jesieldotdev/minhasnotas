import { Dock } from "lucide-react"
import SearchInput from "../Search"
import { Home } from "../../pages/Home"



export const RightContent = () => {
    return (
        <div className="flex-1">
        <header className="min-h-20 border-b border-l flex justify-between">
          <div className="mt-4 ml-4">
            <SearchInput className="" />
          </div>

          <Dock />
        </header>

        <Home />
      </div>
    )
}