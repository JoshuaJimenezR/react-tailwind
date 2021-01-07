import React from 'react';

const Input = ({ name, label, value, onChange, placeholder, type, error }) => {
    return (
        <label className="block text-sm my-4">
            <span className="text-gray-700 dark:text-gray-400">{ label }</span>
            <input
                className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name={name}
                type={type}
            />

            { error &&
                <small className="text-sm text-red-700 white:border-red-700 dark:border-red-700">
                    {error}
                </small>
            }
        </label>
    );
};

export default Input;
