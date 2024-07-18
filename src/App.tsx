import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { SideBar } from './components/Sidebar';
import { Home } from './pages/Home';
import { Header } from './pages/Home/components/Header';
import SearchInput from './components/Search';
import { Dock } from './components/Dock';
import { HeaderMobile } from './pages/Home/components/HeaderMobile';
import { useAppContext } from "./context/AppContext";
import { NewTodo } from './pages/NewTodo';
import Register from './pages/Register';
import Login from './pages/Login';
import { Flashcards } from './pages/Flashcards';
import { SidebarMobile } from './pages/Home/components/SidebarMobile';
import { AnimatePresence } from 'framer-motion';
import { Settings } from './pages/Settings';

function App() {
  const { logout, isSidebarOpen, setIsSidebarOpen } = useAppContext();
  const [sidebarWidth, setSidebarWidth] = useState(250); // largura inicial da sidebar
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCloseModal = () => {
    setIsSidebarOpen(false);
  };

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="*"
        element={
          !isMobile ? (
            <div style={{
              overflowY: 'hidden',
              height: '100vh'
            }} className="flex">
              <div
                className="relative"
                style={{ width: sidebarWidth }}
              >
                <Header className="border-b min-h-20" />
                <SideBar className="block" />
              </div>
              <div className="flex-1">
                <header className="min-h-20 border-b border-l flex justify-between">
                  <div className="mt-4 ml-4">
                    <SearchInput />
                  </div>
                  <Dock />
                </header>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/new" element={<NewTodo onClose={undefined} />} />
                  <Route path="/flashcards" element={<Flashcards />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </div>
            </div>
          ) : (
            <>
              <HeaderMobile />
              <AnimatePresence>
                {isSidebarOpen && (
                  <SidebarMobile onClose={handleCloseModal} />
                )}
              </AnimatePresence>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new" element={<NewTodo onClose={undefined} />} />
                <Route path="/flashcards" element={<Flashcards />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </>
          )
        }
      />
    </Routes>
  );
}

export default App;
