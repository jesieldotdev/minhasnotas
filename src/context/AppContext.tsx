import React, { ReactNode } from "react";
import { createContext, useContext } from "react";
import { Task } from "../models/models";





type AppContextProps = {
    tasks: Task[]
    setTasks: (t: Task[]) => void
    isLoading: boolean
    setIsLoading: (b: boolean) => void
    fetchTasks: () => void
    changeOrder: () => void
    isReverseOrder: boolean
};

const AppContext = createContext<AppContextProps | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {

    const [tasks, setTasks] = React.useState<Task[]>([])
    const [isLoading, setIsLoading] = React.useState(true);
    const [isReverseOrder, setIsReverseOrder] = React.useState(true)


    async function fetchTasks() {
        fetch(`${import.meta.env.VITE_API_URL}/tasks`)
            .then(response => response.json())
            .then(data => {
                setTasks(isReverseOrder ? data : data.reverse());
                setIsLoading(false);
            });
    }

    async function changeOrder() {
        setIsReverseOrder(!isReverseOrder)
        await fetchTasks()
    }


    React.useEffect(() => {
        const timeoutId = setTimeout(() => {
        }, 2000);

        fetch(`${import.meta.env.VITE_API_URL}/tasks`)
            .then(response => response.json())
            .then(data => {
                setTasks(isReverseOrder ? data.reverse() : data);
                setIsLoading(false); // Certifique-se de definir isLoading como false após os dados serem carregados
            });

        return () => clearTimeout(timeoutId);
    }, []);



    return (
        <AppContext.Provider value={{
            tasks,
            setTasks,
            isLoading,
            setIsLoading,
            fetchTasks,
            changeOrder,
            isReverseOrder

        }}>
            {children}
        </AppContext.Provider>
    );
}


export function useAppContext(): AppContextProps {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within a AppContext');
    }
    return context;
}


