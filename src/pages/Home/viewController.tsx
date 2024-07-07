import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import React, { useState } from "react";

interface ControllerHomeProps {

}

export const ControllerHome = () => {

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
    }

    return {
        tasks,
        changeOrder,
        isReverseOrder,
        isLogging, logout,
        user, toggleOption,
        onNewTodo,
        options,
        selectedOptions

    }
}