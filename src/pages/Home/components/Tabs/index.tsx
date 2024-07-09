import { useAppContext } from '../../../../context/AppContext';

const TabComponent = () => {
  
const {
    activeTab,
    setActiveTab
} = useAppContext()

    const tabData = [
        { id: 'all', label: 'Todas',  },
        { id: 'pendents', label: 'Pendentes', qtt: 3 },
        { id: 'completed', label: "Completadas", qtt: 0 },
    ];

    return (
        <div className="flex">
            {tabData.map((tab) => (
                <div   key={tab.id} className='flex '>
                    <button
                      
                        className={` mr-2 border-gray-700 font-semibold ${activeTab === tab.id ? ' text-iphone-blue-2  ' : 'text-[#d2d2d2]'
                            }`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                    {tab.qtt ? <p className='bg-iphone-blue-2 mr-2 text-iphone-white px-2 py-1 m-auto rounded-full text-xs flex justify-center items-center'>{tab.qtt}</p> : null}
                </div>
            ))}
            {/* Renderize o conteúdo relacionado à aba ativa aqui */}
        </div>
    );
};

export default TabComponent;
