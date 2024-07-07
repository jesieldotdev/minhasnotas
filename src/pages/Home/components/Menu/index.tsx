import { FolderOpenDot, LayoutDashboard } from 'lucide-react';
import React, { useState } from 'react';
import { FiHome, FiFolder, FiCheckSquare, FiList, FiCalendar } from 'react-icons/fi';

const Menu = () => {
  const [activeItem, setActiveItem] = useState('dashboard'); // Estado para controlar o item ativo

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: < LayoutDashboard /> },
    { id: 'projects', label: 'Projetos', icon: <FolderOpenDot /> },
  ];

  return (
    <div className="bg-white h-screen flex flex-col p-4 pt-0">
      <div className="text-normal  font-normal p-4 text-zinc-500">MENU</div>
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
  );
};

export default Menu;
