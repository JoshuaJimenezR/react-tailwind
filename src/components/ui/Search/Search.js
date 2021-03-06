import React from 'react';
import SearchIcon from "../../Icons/SearchIcon";

const Search = ({placeholder}) => {
    return (
        <div
            className="relative w-full max-w-xl mr-6 focus-within:text-purple-500"
        >
            <div className="absolute inset-y-0 flex items-center pl-2">
                <SearchIcon />
            </div>
            <input
                className="w-full pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
                type="text"
                placeholder={placeholder}
                aria-label="Search"
            />
        </div>
    );
};

export default Search;