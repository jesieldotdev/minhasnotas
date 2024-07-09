import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight, Frown, Smile } from 'lucide-react';

interface DeskProps {}

export const Desk = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <AnimatePresence>
                {!isFlipped ? (
                    <motion.div
                        key="front"
                        initial={{ opacity: 1, rotateY: 0 }}
                        animate={{ opacity: 1, rotateY: 0 }}
                        exit={{ opacity: 1, rotateY: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col justify-between bg-white cursor-pointer shadow-sm p-6 rounded-lg lg:max-w-fit h-fit"
                        onClick={handleFlip}
                        style={{ backfaceVisibility: 'hidden', transformStyle: 'preserve-3d' }}
                    >
                        <div className="flex justify-between mb-4">
                            <p className="bg-blue-sec text-iphone-blue border-2 rounded-md py-1 px-2 text-sm font-semibold">
                                Direito Constitucional
                            </p>
                            {/* <button className="font-bold text-zinc-600">Editar</button> */}
                        </div>

                        <div className="flex-1 mb-32 justify-center">
                            <p className="font-bold text-2xl text-zinc-600 mb-4">
                                Quais são os princípios fundamentais da Constituição Brasileira de 1988??
                            </p>
                            {/* <p className="overflow-auto">
                                Os princípios fundamentais incluem a soberania, a cidadania, a dignidade da pessoa humana, os valores sociais do trabalho e da livre iniciativa, o pluralismo político, entre outros.
                            </p> */}
                        </div>

                        <div className="flex justify-between">
                            <button className="border-red-200 text-red-400 border-2 rounded-md py-1 px-2 text-sm flex items-center gap-1 font-bold">
                                <Frown size={16} /> Esqueci
                            </button>
                            <button className="border-green-200 text-green-400 border-2 rounded-md py-1 px-2 text-sm flex items-center gap-1 font-bold">
                                <Smile size={16} /> Eu sei
                            </button>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="back"
                        initial={{ opacity: 0, rotateY: 180 }}
                        animate={{ opacity: 1, rotateY: 0 }}
                        exit={{ opacity: 0, rotateY: 180 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col justify-between bg-white cursor-pointer shadow-sm p-6 rounded-lg lg:max-w-fit h-fit"
                        onClick={handleFlip}
                        style={{ backfaceVisibility: 'hidden', transformStyle: 'preserve-3d' }}
                    >
                        <div className="back-content" 
                        // style={{ transform: 'rotateY(180deg)' }}
                        >
                            <div className="flex-1 mb-32 justify-center">
                                <p className="font-bold text-2xl text-zinc-600">Resposta:</p>
                                <div className="overflow-auto" 
                                // style={{ transform: 'rotateY(180deg)' }}
                                >
                                    <p>
                                        Os princípios fundamentais incluem a soberania, a cidadania, a dignidade da pessoa humana, os valores sociais do trabalho e da livre iniciativa, o pluralismo político, entre outros.
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <button className="border-zinc-400 border-2 rounded-md py-1 px-2 text-sm flex items-center gap-1 font-bold">
                                    <ChevronRight size={16} /> Próximo
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
