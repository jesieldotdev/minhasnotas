import { ControllerNewTodo } from "./viewController";
import { motion } from "framer-motion";

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
                <h1 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">Nova tarefa</h1>
                <p className="mb-2 sm:mb-4">Descreva a tarefa que precisa ser feita</p>

                <input
                    className="w-full p-2 sm:p-4 text-base sm:text-lg border border-gray-300 rounded-lg mb-2 sm:mb-4"
                    placeholder="O que precisa ser feito?"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <div className="flex flex-col justify-between">


                    <div className="flex flex-col sm:flex-row sm:justify-between space-y-2 sm:space-y-0 sm:space-x-4">

                        <button
                            onClick={() => onClose()}
                            className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                        >
                            Cancelar
                        </button>
                        <button
                            onClick={addTodo}
                            className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                        >
                            Salvar
                        </button>

                    </div>
                </div>
            </motion.div>
        </div>
    );
};
