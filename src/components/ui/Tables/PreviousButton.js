import React from 'react';
import PreviousArrowIcon from "../../Icons/PreviousArrowIcon";

const PreviousButton = () => {
    return (
        <button
            className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
            aria-label="Previous"
        >
            <PreviousArrowIcon/>
        </button>
    );
};

export default PreviousButton;