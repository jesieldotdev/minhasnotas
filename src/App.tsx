import { useState, useEffect } from 'react';
import { SideBar } from './components/Sidebar';
import { Home } from './pages/Home';
import { Header } from './pages/Home/components/Header';
import SearchInput from './components/Search';
import { Dock } from './components/Dock';
import { HeaderMobile } from './pages/Home/components/HeaderMobile'
import { useAppContext } from "./context/AppContext"

function App() {
  const { logout } = useAppContext()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [sidebarWidth, setSidebarWidth] = useState(250); // largura inicial da sidebar
  const [isMobile, setIsMobile] = useState()

  useEffect(() => {
    if (window.innerWidth < 768) setIsMobile(window.innerWidth)
  }, [])




  return (
    <>

 

      {!isMobile ?
        <div className="flex  ">

          <div
            className="relative"
            style={{ width: isSidebarOpen ? `${sidebarWidth}px` : '2px', background: 'bg-zinc-800' }}
          >
            <Header className="border-b min-h-20" />
            <SideBar
              className="block"
            />
          </div>



          <div className="flex-1">
            <header className="min-h-20 border-b border-l flex justify-between">
              <div className="mt-4 ml-4">
                <SearchInput className="" />
              </div>

              <Dock />
            </header>

            <Home />
          </div>
        </div>

        : <>
          <HeaderMobile onClick={() => logout} />
          <Home />
        </>
      }
    </>
  );
}

export default App;
