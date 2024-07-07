import { useState, useEffect } from 'react';
import { SideBar } from './components/Sidebar';
import { Home } from './pages/Home';
import { NewEventModal } from './pages/Home/components/NewEventModal';
import { Header } from './pages/Home/components/Header';
import SearchInput from './components/Search';
import { Dock } from './components/Dock';
import { HeaderMobile } from './pages/Home/components/HeaderMobile';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isResizing, setIsResizing] = useState(false);
  const [startX, setStartX] = useState(0);
  const [sidebarWidth, setSidebarWidth] = useState(250); // largura inicial da sidebar

  const handleMouseDown = (event) => {
    setIsResizing(true);
    setStartX(event.clientX);
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  const handleMouseMove = (event) => {
    if (isResizing) {
      const delta = event.clientX - startX;
      const newWidth = sidebarWidth + delta;
      setSidebarWidth(newWidth);
      setStartX(event.clientX);
    }
  };

  useEffect(() => {
    if (isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  return (
    <>
      {/* HeaderMobile visível apenas em dispositivos móveis */}
      <div className="block lg:hidden">
        <HeaderMobile logout={() => alert('')} />
      </div>

      <div className="flex h-full ">
        <div
          className="relative"
          style={{ width: isSidebarOpen ? `${sidebarWidth}px` : '2px', background: 'bg-zinc-800' }}
        >
          <Header className="border-b min-h-20" />
          <SideBar
            className="block"
            onMouseDown={handleMouseDown}
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
