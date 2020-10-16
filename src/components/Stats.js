import React from 'react';
import MoneyIcon from "../Icons/MoneyIcon";

const Stats = ({records}) => {


    return (
        <React.Fragment>
            { records.map((item) => (
                <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                    <div className="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
                        <MoneyIcon/>
                    </div>
                    <div>
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                            { item.title }
                        </p>
                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                            ¢ {item.amount}
                        </p>
                        { item.negative &&
                        <small> Monto utilizado (¢ {item.negative})</small>
                        }
                    </div>
                </div>
            ))}
        </React.Fragment>
    );
};

export default Stats;
