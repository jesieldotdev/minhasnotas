import { format } from "date-fns";
import { useEffect, useState } from "react";
import { ptBR } from 'date-fns/locale';

interface DockProps{

}

export const Dock = () => {

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

    const formattedDate = format(currentTime,  "EEEE, dd 'de' MMMM", { locale: ptBR });

    return (
        <div className="text-right p-3  leading-none">
            <p className="text-zinc-800 font-semibold  text-lg">{format(currentTime, 'HH:mm:ss')}</p>
            <p className="text-sm text-gray-500 first-letter:capitalize">{formattedDate}</p>

        </div>
    )
}