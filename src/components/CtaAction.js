import React from 'react';

const CtaAction = ({title, actions}) => {
    return (
        <div className="bg-gray-50">
            <div
                className="max-w-screen-xl mx-auto py-1 sm:px-1 lg:py-1 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                    {title}
                </h2>
                <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0">
                    {actions.map((action) => (
                        <div className="ml-3 inline-flex rounded-md shadow">
                            <button
                                onClick={action.onClick}
                               className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                                {action.title}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CtaAction;
