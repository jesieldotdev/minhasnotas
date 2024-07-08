import { Cog, FolderOpenDot, LayoutDashboard } from 'lucide-react';
import React, { useState } from 'react';

const Menu = () => {
  const [activeItem, setActiveItem] = useState('dashboard'); 
  const [generalItem, setGeneralItem] = useState('settings'); 

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: < LayoutDashboard /> },
    { id: 'projects', label: 'Projetos', icon: <FolderOpenDot /> },
  ];

  const general = [
    { id: 'settings', label: 'Configurações', icon: < Cog /> },
  ];

  return (
    <div className="bg-white h-screen flex flex-col p-4 pt-0 justify-between">
      <div>
        <div className="text-normal  font-normal p-4 text-zinc-500">Menu</div>
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`flex items-center font-semibold p-4 rounded w-full ${activeItem === item.id ? 'bg-blue-sec text-iphone-blue border-r-2' : 'text-zinc-500'
              }`}
            onClick={() => setActiveItem(item.id)}
          >
            {item.icon}
            <span className="ml-2 ">{item.label}</span>
          </button>
        ))}
      </div>

      <div className='border-t'>
        <div className="text-normal  font-normal p-4 text-zinc-500">Geral</div>
        {general.map((item) => (
          <button
            key={item.id}
            className={`flex items-center font-semibold p-4 rounded w-full ${activeItem === item.id ? 'bg-blue-sec text-iphone-blue border-r-2' : 'text-zinc-500'
              }`}
            onClick={() => setGeneralItem(item.id)}
          >
            {item.icon}
            <span className="ml-2 ">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Menu;
