import { Calendar, CalendarCheck, X } from "lucide-react";
import { ControllerNewTodo } from "./viewController";
import { motion } from "framer-motion";
import { Datepicker } from "flowbite-react";

export const NewTodo = ({ onClose }) => {
    const {
        addTodo,
        description,
        setDescription,
    } = ControllerNewTodo(
        { onClose }
    );

    const handleClickOutside = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 flex justify-end items-right bg-zinc-700 bg-opacity-50"
            onClick={handleClickOutside}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full sm:max-w-lg p-4 sm:p-6 border border-gray-300 rounded-lg bg-white shadow-lg"
            >
                <div className="flex justify-between">
                    <div className="flex "><Calendar /><p className="text-lg ml-2  font-medium mb-2 sm:mb-4 uppercase">Nova tarefa</p>
                    </div>

                    <button onClick={() => onClose()}><X /></button>
                </div>
                <p className="mb-2">Titulo</p>

                <input
                    className="w-full p-2 sm:p-4 text-base sm:text-lg border border-gray-300 rounded-lg mb-2 sm:mb-4"
                    placeholder="Estudar direito constitucional"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <p className="mb-2">Descrição</p>

                <textarea
                    className="w-full p-2 sm:p-4 text-base sm:text-lg border border-gray-300 rounded-lg mb-2 sm:mb-4"
                    placeholder="Escreva a descrição da tarefa"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <Datepicker language="pt-BR" labelTodayButton="Hoje" labelClearButton="Limpar" />

                <div className="flex flex-col justify-between">


                    <div className="flex flex-col sm:flex-row sm:justify-between space-y-2 sm:space-y-0 sm:space-x-4">

                     
                   


                    </div>
                    
                </div>
                
                <button type="submit" className="text-white justify-center flex items-center bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                          <CalendarCheck className=""/>
                        Salvar tarefa</button>
                
            </motion.div>
            
        </div>
    );
};
