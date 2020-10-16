import React from 'react';

const DropDownMenu = ({options}) => {
    return (
        <div
            className="absolute -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
            <div className="rounded-lg shadow-lg">
                <div className="rounded-lg shadow-xs overflow-hidden">
                    <div className="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        {options.map((item) => (
                            <a href="#"
                               className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                                <div className="space-y-1">
                                    <p className="text-base leading-6 font-medium text-gray-900">
                                        {item.title}
                                    </p>
                                    <p className="text-sm leading-5 text-gray-500">
                                        {item.description}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DropDownMenu;
