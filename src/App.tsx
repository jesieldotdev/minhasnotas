import { useState } from 'react';
import { SideBar } from './components/Sidebar';
import { Home } from './pages/Home';
import { NewEventModal } from './pages/Home/components/NewEventModal';
import { Header } from './pages/Home/components/Header';
import SearchInput from './components/Search';

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

  return (<>
    <div className='bg-red-400 w-full min-h-max flex'>

    </div>
    <div className='flex '>
      <div
        className='relative'
        style={{ width: isSidebarOpen ? `${sidebarWidth}px` : '2px bg-zinc-800' }}
      >
        <Header className='border-b  min-h-20' />
        <SideBar
          className='sm:display-none '
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        />
      </div>

      <div className='flex-1 '>
        <header className='min-h-20 border-b border-l pl-4 pt-4'>
          <SearchInput className='' />
        </header>

        <Home />
      </div>
    </div>
  </>
  );
}

export default App;
