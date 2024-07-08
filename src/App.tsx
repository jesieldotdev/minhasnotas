import { useState, useEffect } from 'react';
import { SideBar } from './components/Sidebar';
import { Home } from './pages/Home';
import { Header } from './pages/Home/components/Header';
import SearchInput from './components/Search';
import { Dock } from './components/Dock';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [sidebarWidth, setSidebarWidth] = useState(250); // largura inicial da sidebar


  return (
    <>
      {/* HeaderMobile visível apenas em dispositivos móveis */}
      {/* <div className="block lg:hidden">
        <HeaderMobile logout={() => alert('')} />
      </div> */}

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
    </>
  );
}

export default App;
