import React from 'react';

const Container = ({children}) => {
    return (
        <div className="container px-6 mx-auto grid">
            <div className="grid grid-cols-1">
                { children }
            </div>
        </div>
    );
};

export default Container;
