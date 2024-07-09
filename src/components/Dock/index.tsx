import { format } from "date-fns";
import { useEffect, useState } from "react";
import { ptBR } from 'date-fns/locale';
import { Bell, BellDot } from "lucide-react";

interface DockProps {}

export const Dock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedDate = format(currentTime, "EEEE, dd 'de' MMMM", { locale: ptBR });

  const noti = { icon: Bell, icon2: BellDot };

  return (
    <div className="flex justify-between items-center border-spacing-y-1">
      <div className="text-right p-1 leading-none border-r mr-2">
        <p className="text-zinc-800 font-bold text-lg">{format(currentTime, 'HH:mm:ss')}</p>
        <p className="text-sm text-gray-500 first-letter:capitalize">{formattedDate}</p>
      </div>
      <button className="border rounded-full p-1 mr-2">
        <noti.icon2 size={18} />
      </button>
    </div>
  );
};
