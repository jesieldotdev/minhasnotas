import { useNavigate } from "react-router-dom"
import { useAppContext } from "../../context/AppContext"
import { enqueueSnackbar } from "notistack"
import { useState } from "react"

interface ControllerNewTodoProps {
    onClose: () => void
}

export const ControllerNewTodo = ({ onClose }: ControllerNewTodoProps) => {
    const [title, setTitle] = useState(String)
    const [tags, setTags] = useState<string[]>([])
    const [description, setDescription] = useState(String)
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<Date>(new Date());
    const route = useNavigate()



    const date = new Date()
    const { setTasks, user } = useAppContext()

    const addTodo = () => {
        if (description === '' || description === undefined) return enqueueSnackbar('O campo não pode ficar vazio!')
        fetch(`${import.meta.env.VITE_API_URL}/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: description, createdAt: date, author: user?.email }),
        })
            .then(response => response.json())
            .then(data => {
                setTasks(prev => {

                    return [...prev, data]
                })
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        onClose()
    };


    return {
        addTodo,
        date,
        description,
        user,
        onClose,
        setDescription,
        title,
        setTitle,
        startDate,
        endDate,
        setStartDate,
        setEndDate,
        tags,
        setTags

    }
}