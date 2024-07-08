import { ArrowDownNarrowWide, LogOut } from "lucide-react";
import { Card } from "./components/Card";
import { AddButton } from "./components/ButtonAdd";
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { NewTodo } from "../NewTodo";
import { ControllerHome } from "./viewController";
import { AnimatePresence, motion } from "framer-motion";
import TabComponent from "./components/Tabs";
import { Header } from "./components/Header";
import { Actions } from "./components/Actions";
import { HeaderMobile } from "./components/HeaderMobile";
import SearchInput, { Search } from "../../components/Search";

export const Home = () => {
    const {
        options,
        logout,
        toggleOption,
        changeOrder,
        isReverseOrder,
        tasks,
        onNewTodo,
        selectedOptions,
        user
    } = ControllerHome();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleNewTodo = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="border-l">
            {/* <HeaderMobile className="md:none" logout={logout} /> */}
         
            {/* <TabComponent/> */}

            <div className=" px-4 pt-4 bg-[#f9f9f9] h-screen flex flex-col">

                <Actions
                    selectedOptions={selectedOptions}
                    changeOrder={changeOrder}
                    isReverseOrder={isReverseOrder}
                    options={options}
                    toggleOption={toggleOption}
                />

                <div className="gap-2 lg:grid grid-cols-3 overflow-y-scroll flex-1 ">
                    {!!tasks && tasks.filter(task => task.author === user?.email).map(item =>
                        <Card
                            todo={item}
                            key={item.id}
                        />)
                    }
                    {!tasks.length ? <p className="text-center mt-24">Nenhuma tarefa</p> : null}
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
