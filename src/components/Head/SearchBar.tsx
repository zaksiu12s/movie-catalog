import { useState } from "react";
import React from "react";
import { FaSearch } from "react-icons/fa";

interface Props {
  onDataSend: (data: string) => void;
}

const SearchBar = ({ onDataSend }: Props) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSendData = () => {
    onDataSend(inputValue);
  };

  return (
    <div className="flex items-center space-x-4 p-4 bg-gray-900 rounded-md shadow-md">
      <label
        htmlFor="search"
        className="text-lg font-medium text-gray-300 hidden md:block"
      >
        Search movies
      </label>
      <input
        id="search"
        name="search"
        type="text"
        placeholder="Type a movie name..."
        onChange={(e) => setInputValue(e.target.value)}
        className="flex-grow p-2 text-lg bg-gray-800 text-gray-300 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <button
        onClick={handleSendData}
        className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
        aria-label="Search"
      >
        <FaSearch className="w-5 h-5" />
      </button>
    </div>
  );
};

export default SearchBar;
