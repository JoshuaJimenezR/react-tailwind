import React from 'react';

const Wrapper = ({children}) => {
    return (
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
            {children}
        </div>
    );
};

export default Wrapper;