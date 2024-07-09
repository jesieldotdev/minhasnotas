import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Cog, FolderOpenDot, LayoutDashboard, LogOut } from 'lucide-react';
import { useAppContext } from '../../../../context/AppContext';

const Menu = () => {
  const { logout } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();

  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    const pathname = location.pathname;
    setActiveItem(getActiveItem(pathname));
  }, [location.pathname]);

  const getActiveItem = (pathname: string) => {
    if (pathname === '/flashcards') {
      return 'flashcards';
    } else if (pathname === '/') {
      return 'dashboard';
    } else if (pathname === '/settings') {
      return 'settings';
    } else {
      return '';
    }
  };


  const dashboardNavigate = () => {
    navigate('/');
  };
  const flashCardsNavigate = () => {
    navigate('/flashcards');
  };
  const settingsNavigate = () => {
    navigate('/settings');
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard />, callback: dashboardNavigate },
    { id: 'flashcards', label: 'Flashcards', icon: <FolderOpenDot />, callback: flashCardsNavigate },
  ];

  const general = [
    { id: 'settings', label: 'Configurações', icon: <Cog />, callback: settingsNavigate },
    { id: 'logout', label: 'Deslogar', icon: <LogOut />, callback: logout },
  ];

  return (
    <div>
      <div>
        <div className="text-normal font-normal p-4 text-zinc-500">Menu</div>
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`flex items-center font-semibold p-4 rounded w-full ${activeItem === item.id ? 'bg-blue-sec text-iphone-blue border-r-2' : 'text-zinc-500'
              }`}
            onClick={() => {
              setActiveItem(item.id);
              if (item.callback) {
                item.callback();
              }
            }}
          >
            {item.icon}
            <span className="ml-2">{item.label}</span>
          </button>
        ))}
      </div>

      <div className='border-t mt-4'>
        <div className="text-normal font-normal px-4 mt-4 text-zinc-500 pb-4">Geral</div>
        {general.map((item) => (
          <button
            key={item.id}
            className={`flex items-center font-semibold p-4 rounded w-full ${activeItem === item.id ? 'bg-blue-sec text-iphone-blue border-r-2' : 'text-zinc-500'
              }`}
              onClick={() => {
                setActiveItem(item.id);
                if (item.callback) {
                  item.callback();
                }
              }}
          >
            {item.icon}
            <span className="ml-2">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Menu;
