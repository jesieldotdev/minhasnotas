import { ArrowDownNarrowWide } from "lucide-react"
import React from "react"
import { Card } from "./components/Card"
import { AddButton } from "./components/ButtonAdd"

export const Home = () => {
    return (
        <div className="px-6 pt-8 space-y-2">
            <div className="flex justify-between items-center mb-8">
                <p className="text-4xl font-bold">Tarefas</p>
                <ArrowDownNarrowWide />



            </div>
            <Card />
            <Card />
            <Card />

            <div className="relative">
                <div className="fixed bottom-4 right-4 font-bold py-2 px-4 rounded">
                    <AddButton />
                </div>
            </div>

        </div>
    )
}