import React, { ReactNode } from "react";
import { createContext, useContext } from "react";
import { Task } from "../models/models";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../config/firebase.config";





type AppContextProps = {
    tasks: Task[]
    setTasks: (t: Task[]) => void
    isLoading: boolean
    setIsLoading: (b: boolean) => void
    fetchTasks: () => void
    changeOrder: () => void
    isReverseOrder: boolean
    isLogging: boolean
    user: User | undefined
    logout: () => void
};

const AppContext = createContext<AppContextProps | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {

    const [tasks, setTasks] = React.useState<Task[]>([])
    const [isLoading, setIsLoading] = React.useState(true);
    const [isReverseOrder, setIsReverseOrder] = React.useState(true)
    const [isLogging, setIsLogging] = React.useState(true)
    const [user, setUser] = React.useState<User>()

    function logout() {
        try {
            auth.signOut()
            setUser(undefined)
        } catch (error) {
            console.log(error)
        }
    }

    function checkUserLoggedIn() {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLogging(true);
                setUser(user);
            } else {
                setIsLogging(false);
            }
        });

        return () => unsubscribe();
    }




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

    React.useEffect(() => {
        checkUserLoggedIn()

    }, []);



    return (
        <AppContext.Provider value={{
            tasks,
            setTasks,
            isLoading,
            setIsLoading,
            fetchTasks,
            changeOrder,
            isReverseOrder,
            isLogging,
            user,
            logout

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