import React from 'react';

import Details from "./Details";

const Table = ({children}) => {
    return (
        <div className="w-full overflow-hidden rounded-lg shadow-xs">
            <div className="w-full overflow-x-auto">
                <table className="w-full whitespace-no-wrap">
                    {children}
                </table>
            </div>
            <Details />
        </div>
    );
};

export default Table;
