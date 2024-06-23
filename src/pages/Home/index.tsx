import { ArrowDownNarrowWide } from "lucide-react"
import { Card } from "./components/Card"
import { AddButton } from "./components/ButtonAdd"
import { useNavigate } from 'react-router-dom';
import { useAppContext } from "../../context/AppContext";


export const Home = () => {
    const route = useNavigate()

    const { tasks, changeOrder, isReverseOrder } = useAppContext()

    function onNewTodo() {
        route('/new')
        return
    }


    return (
        <div className="px-6 pt-8 ">
            <div className="flex justify-between items-center mb-8">
                <p className="text-3xl font-light">Agenda<span className="font-semibold text-slate-600">ACS</span></p>
                <ArrowDownNarrowWide className={isReverseOrder ? 'text-slate-600' : ''} onClick={() => changeOrder()} />

            </div>

            <div className=" gap-2 lg:grid grid-cols-3">       {
                !!tasks && tasks.map(item =>
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