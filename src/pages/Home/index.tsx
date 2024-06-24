import { ArrowDownNarrowWide, LogOut } from "lucide-react"
import { Card } from "./components/Card"
import { AddButton } from "./components/ButtonAdd"
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";


export const Home = () => {
    const route = useNavigate()

    const options = ['Pendentes', 'Feitas'];

    const { tasks, changeOrder, isReverseOrder, isLogging, logout, user } = useAppContext()

    React.useEffect(() => {
        if (!isLogging) route('/login')
    }, [isLogging])

    function onNewTodo() {
        route('/new')
        return
    }

    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const toggleOption = (option: string) => {
        if (selectedOptions.includes(option)) {
            setSelectedOptions(selectedOptions.filter(item => item !== option));
        } else {
            setSelectedOptions([...selectedOptions, option]);
        }
    };


    return (
        <div className="px-6 pt-4 ">

            <div className="flex justify-between items-center mb-4">
                <p className="text-3xl font-light">Agenda<span className="font-semibold text-slate-600">ACS</span></p>


                <button onClick={() => logout()}><LogOut /></button>

            </div>

           <hr className="mb-8"/>

            <div className="flex justify-between mb-4">
                {/* <p >Tarefas</p> */}
                <div className="flex flex-wrap gap-2">
                {options.map((option, index) => (
                    <div
                        key={index}
                        className={`px-3 py-1 bg-zinc-500 text-white text-sm rounded-full cursor-pointer hover:bg-blue-600 ${selectedOptions.includes(option) ? 'bg-blue-600' : ''
                            }`}
                        onClick={() => toggleOption(option)}
                    >
                        {option}
                    </div>
                ))}
            </div>
                <button onClick={() => changeOrder()}> <ArrowDownNarrowWide
                    className={isReverseOrder ? 'text-slate-600' : ''}
                /></button>
            </div>

            <div className=" gap-2 lg:grid grid-cols-3">       {
                !!tasks && tasks.filter(task => task.author === user?.email).map(item =>
                    <Card
                        todo={item}
                        key={item.id}
                    />)
            }

                {
                    !tasks.length ? <p className="text-center mt-24">Nenhuma tarefa</p> : null
                }
            </div>


            <div className="relative">
                <div className="fixed bottom-4 right-4 font-bold py-2 px-4 rounded">
                    <AddButton onClick={() => onNewTodo()} />
                </div>
            </div>


        </div>
    )
}


