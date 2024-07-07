import React, { useState } from 'react';

const TabComponent = () => {
    const [activeTab, setActiveTab] = useState('todayTask'); // Estado para controlar a aba ativa

    const tabData = [
        { id: 'messages', label: 'Todos', qtt: 3 },
        { id: 'todayTask', label: "Pendentes", qtt: 0 },
    ];

    return (
        <div className="flex mb-4">
            {tabData.map((tab) => (
                <div className='flex '>
                    <button
                        key={tab.id}
                        className={`px-4 py-2 border-gray-700 font-semibold ${activeTab === tab.id ? ' text-iphone-blue-2  ' : 'text-[#d2d2d2]'
                            }`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                    {tab.qtt ? <p className='bg-iphone-blue-2 text-iphone-white px-2 py-1 m-auto rounded-full text-xs flex justify-center items-center'>{tab.qtt}</p> : null}
                </div>
            ))}
            {/* Renderize o conteúdo relacionado à aba ativa aqui */}
        </div>
    );
};

export default TabComponent;
