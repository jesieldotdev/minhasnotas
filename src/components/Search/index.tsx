import React from 'react';
import { SearchIcon } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

interface SearchInputProps {
  className: string
}

const SearchInput = ({ className }: SearchInputProps) => {
  const {
    searchText,
    setSearchText
  } = useAppContext()
  return (
    <div className={`relative text-gray-600 border rounded-full  ${className}`}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <SearchIcon className="text-gray-500" size="20" />
      </div>
      <input

        value={searchText}
        onChange={(e) => setSearchText(e.currentTarget.value)}
        type="search"
        placeholder="Procurar por tarefa..."
        className="bg-white h-10 pl-10 pr-5 rounded-full text-sm focus:outline-none"
      />
    </div>
  );
};

export default SearchInput;
