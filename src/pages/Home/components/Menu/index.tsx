import { Cog, FolderOpenDot, LayoutDashboard, LogOut } from 'lucide-react';
import React, { useState } from 'react';

const Menu = () => {
  const [activeItem, setActiveItem] = useState('dashboard'); 
  const [generalItem, setGeneralItem] = useState('settings'); 

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: < LayoutDashboard /> },
    { id: 'collections', label: 'Coleções', icon: <FolderOpenDot /> },
  ];

  const general = [
    { id: 'settings', label: 'Configurações', icon: < Cog /> },
    { id: 'logout', label: 'Deslogar', icon: < LogOut /> },
  ];

  return (
    // <div className="bg-white h-screen flex flex-col p-4 pt-0 justify-between">
    <div>
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

      <div className='border-t mt-4'>
        <div className="text-normal  font-normal px-4 mt-4 text-zinc-500 pb-4">Geral</div>
        {general.map((item) => (
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
     </div>
  );
};

export default Menu;
