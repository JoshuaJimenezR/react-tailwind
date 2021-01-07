import React from 'react';

const PageButton = ({number}) => {
    return (
        <button
            className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
        >
            {number}
        </button>
    );
};

export default PageButton;