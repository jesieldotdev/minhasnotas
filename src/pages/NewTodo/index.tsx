import { Calendar, CalendarCheck, ChevronLeft, Ellipsis, X } from "lucide-react";
import { ControllerNewTodo } from "./viewController";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import TagComponent from "./components/Tags";
import DateRangePicker from "./components/DateRangerPicker";
import { NewTaskModalDesktop } from "./components/NewTaskModalDesktop";
import { NewTaskMobile } from "./components/NewTaskMobile";

export const NewTodo = ({ onClose }) => {
    const {
        addTodo,
        description,
        setDescription,
        title,
        setTitle,
        startDate,
        endDate,
        setStartDate,
        setEndDate,
        tags,
        setTags
    } = ControllerNewTodo(
        { onClose }
    );

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 768) setIsMobile(true);
    }, []);

    const handleClickOutside = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 flex justify-end items-right bg-black bg-opacity-40 "
            onClick={handleClickOutside}
        >
            
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full sm:max-w-lg p-4 sm:p-6 bg-white rounded-3xl shadow-2xl"
            >
                {isMobile ? (
                    <NewTaskMobile
                        title={title}
                        setTitle={setTitle}
                        addTodo={addTodo}
                        description={description}
                        endDate={endDate}
                        onClose={onClose}
                        setDescription={setDescription}
                        setEndDate={setEndDate}
                        setStartDate={setStartDate}
                        setTags={setTags}
                        startDate={startDate}
                        tags={tags}

                    />
                ) : (
                    <NewTaskModalDesktop
                        title={title}
                        setTitle={setTitle}
                        addTodo={addTodo}
                        description={description}
                        endDate={endDate}
                        onClose={onClose}
                        setDescription={setDescription}
                        setEndDate={setEndDate}
                        setStartDate={setStartDate}
                        setTags={setTags}
                        startDate={startDate}
                        tags={tags}

                    />
                )}
            </motion.div>
        </div>
    );
};
