import React from 'react';

const Container = ({children}) => {
    return (
        <div className="container px-6 mx-auto grid">
            { children }
        </div>
    );
};

export default Container;
