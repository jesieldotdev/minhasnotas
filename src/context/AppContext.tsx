import React, { ReactNode } from "react";
import { createContext, useContext } from "react";
import { Task } from "../models/models";
import { fetchTasksRequest } from "../services/Global";





type AppContextProps = {
    tasks: Task[]
    setTasks: (t: Task[]) => void
    isLoading: boolean
    setIsLoading: (b: boolean) => void
    fetchTasks: ()=>void

};

const AppContext = createContext<AppContextProps | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {

    const [tasks, setTasks] = React.useState<Task[]>([])
    const [isLoading, setIsLoading] = React.useState(true);


    async function fetchTasks(): Promise<unknown[]> {
        try {
            const res = await fetchTasksRequest()
            if (res) setTasks(res)
            return res
        } catch (err) {
            console.log(err);
            return []
        }
    }


    React.useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 5 segundos

        fetch('http://localhost:3000/tasks')
            .then(response => response.json())
            .then(data => {
                setTasks(data);
                setIsLoading(false); // Certifique-se de definir isLoading como false após os dados serem carregados
            });

        return () => clearTimeout(timeoutId);
    }, []);



    return (
        <AppContext.Provider value={{
            tasks, setTasks,
            isLoading,
            setIsLoading,
            fetchTasks

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


