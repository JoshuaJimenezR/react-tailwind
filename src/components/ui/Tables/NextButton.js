import React from 'react';
import NextArrowIcon from "../../Icons/NextArrowIcon";

const NextButton = () => {
    return (
        <button
            className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
            aria-label="Next"
        >
            <NextArrowIcon/>
        </button>
    );
};

export default NextButton;