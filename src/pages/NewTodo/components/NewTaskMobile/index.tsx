import { Calendar, CalendarCheck, ChevronLeft, Ellipsis, X } from "lucide-react"
import { SetStateAction } from "react"
import TagComponent from "../Tags"
import DateRangePicker from "../DateRangerPicker"

interface NewTaskMobileDesktopProps {
    title: string
    setTitle: React.Dispatch<SetStateAction<string>>
    description: string
    setDescription: React.Dispatch<SetStateAction<string>>
    onClose: () => void
    setTags: React.Dispatch<React.SetStateAction<string[]>>
    tags: string[]
    setStartDate: React.Dispatch<React.SetStateAction<Date>>
    setEndDate: React.Dispatch<React.SetStateAction<Date>>
    startDate: Date
    endDate: Date
    addTodo: ()=>void

}

export const NewTaskMobile = ({
    description,
    setDescription,
    onClose,
    tags,
    setTags,
    setEndDate,
    setStartDate,
    startDate,
    endDate,
    addTodo,
    title,
    setTitle


}: NewTaskMobileDesktopProps) => {
    return (
        <div className="h-full flex flex-col justify-between">
        <div>
            <div className="flex justify-between mb-4">
                <button className="p-2 rounded-full bg-white border border-gray-300" onClick={() => onClose()}>
                    <ChevronLeft />
                </button>
                <div className="flex">
                    <p className="text-xl ml-2 font-bold mb-2 sm:mb-4">Nova Tarefa</p>
                </div>
                <button className="p-2 rounded-full bg-white border border-gray-300" onClick={() => onClose()}>
                    <Ellipsis />
                </button>
            </div>
            <p className="mb-2 font-bold text-lg text-gray-700">Título</p>
            <input
                className="w-full p-4 text-lg border border-gray-300 rounded-full mb-4"
                placeholder="Estudar direito constitucional"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <p className="mb-2 font-bold text-lg text-gray-700">Descrição</p>
            <textarea
                rows={7}
                className="w-full p-4 text-lg border border-gray-300 rounded-3xl mb-4"
                placeholder="Escreva a descrição da tarefa"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <TagComponent tags={tags} setTags={setTags} />
            <DateRangePicker
                endDate={endDate}
                startDate={startDate}
                setEndDate={setEndDate}
                setStartDate={setStartDate} />

        </div>
        <button type="submit"
            onClick={() => addTodo()}
            className="text-white font-bold flex items-center justify-center bg-blue-600 hover:bg-blue-700 w-full focus:ring-4 focus:ring-blue-300 rounded-full px-5 py-3 transition duration-300">
            Salvar
        </button>
    </div>
    )
}