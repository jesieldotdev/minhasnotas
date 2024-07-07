import React from 'react';
import { SearchIcon } from 'lucide-react';

interface SearchInputProps {
    className: string
}

const SearchInput = ({className}:SearchInputProps) => {
  return (
    <div className={`relative text-gray-600 border rounded-full  ${className}`}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <SearchIcon className="text-gray-500" size="20" />
      </div>
      <input
        type="search"
        placeholder="Achar a sua tarefa..."
        className="bg-white h-10 pl-10 pr-5 rounded-full text-sm focus:outline-none"
      />
    </div>
  );
};

export default SearchInput;
