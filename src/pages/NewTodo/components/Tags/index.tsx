// src/components/TagComponent.js
import { ControllerTags } from './viewController';
import { X } from 'lucide-react';

interface TagComponentProps {
    tags: string[]
    setTags: React.Dispatch<React.SetStateAction<string[]>>
}

const TagComponent = ({
    setTags,
    tags
}: TagComponentProps) => {
    const {
        addTag,
        input,
        removeTag,
        setInput,
    } = ControllerTags({
        setTags,
        tags
    })



    return (
        <div className="">
            <form onSubmit={addTag} className="flex flex-wrap items-center gap-2 mb-4">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Adicionar tag"
                    className="flex-grow p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button type="submit" className="p-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition duration-300">Okay</button>
            </form>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                    <div key={index} className="flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-sm">
                        <span className="text-sm">{tag}</span>
                        <button onClick={() => removeTag(tag)} className="ml-2  focus:outline-none "><X className='max-h-4' /></button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TagComponent;
