import { useState } from "react";

interface ControllerTagsProps {
    tags: string[]
    setTags: React.Dispatch<React.SetStateAction<string[]>>
}

export const ControllerTags = ({
    setTags,
    tags
}:ControllerTagsProps) => {
    const [input, setInput] = useState('');

    const addTag = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (input.trim() && !tags.includes(input.trim())) {
            setTags([...tags, input.trim()]);
            setInput('');
        }
    };

    const removeTag = (tagToRemove: any) => {
        setTags(tags.filter(tag => tag !== tagToRemove));
    };

    return {
        addTag,
        input, setInput,
        removeTag

    }
}