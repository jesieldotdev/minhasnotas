import { Card } from "./components/Card";
import { AddButton } from "./components/ButtonAdd";
import { NewTodo } from "../NewTodo";
import { ControllerHome } from "./viewController";
import { AnimatePresence } from "framer-motion";
import { Actions } from "./components/Actions";
import { LoadingLottie } from "../../components/Loading";


export const Home = () => {
    const {
        options,
        toggleOption,
        changeOrder,
        isReverseOrder,
        selectedOptions,
        getTasks,
        handleNewTodo,
        isModalOpen,
        handleCloseModal,
        isLoading
    } = ControllerHome();





    return (
        <div className="border-l">


            <div className=" px-4 pt-4 bg-[#f9f9f9] h-screen flex flex-col">

                <Actions
                    selectedOptions={selectedOptions}
                    changeOrder={changeOrder}
                    isReverseOrder={isReverseOrder}
                    options={options}
                    toggleOption={toggleOption}
                />
                <div className="flex justify-center">
                    {
                        isLoading ? <LoadingLottie /> : null
                    }
                </div>

                <div className="gap-2 lg:grid grid-cols-3 overflow-y-scroll flex-1 ">
                    {getTasks().map(item =>
                        <Card
                            todo={item}
                            key={item.id}
                        />)
                    }
                    {!isLoading && !getTasks().length ? <p className="text-center mt-24">Nenhuma tarefa</p> : null}
                </div>
                <div className="absolute bottom-4 right-4 font-bold py-2 px-4 rounded">
                    <AddButton onClick={handleNewTodo} />
                </div>
                <AnimatePresence>
                    {isModalOpen && (
                        <NewTodo onClose={handleCloseModal} />
                    )}
                </AnimatePresence>
            </div>  </div>
    );
};
