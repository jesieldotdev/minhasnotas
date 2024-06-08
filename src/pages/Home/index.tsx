import { ArrowDownNarrowWide } from "lucide-react"
import { Card } from "./components/Card"
import { AddButton } from "./components/ButtonAdd"
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from "react";
import { useAppContext } from "../../context/AppContext";


export const Home = () => {
    const route = useNavigate()

    const { tasks, fetchTasks } = useAppContext()



    console.log(tasks)

    function onNewTodo() {
        route('/new')
        return
    }




    return (
        <div className="px-6 pt-8 space-y-2">
            <div className="flex justify-between items-center mb-8">
                <p className="text-4xl font-semibold">Tarefas</p>
                <ArrowDownNarrowWide />



            </div>

            {
                !!tasks && tasks.map(item => <Card 
                    id={item.id}
                    isChecked={item.done}
                    key={item.id} 
                    description={item.description} />)
            }

            <div className="relative">
                <div className="fixed bottom-4 right-4 font-bold py-2 px-4 rounded">
                    <AddButton onClick={() => onNewTodo()} />
                </div>
            </div>

        </div>
    )
}