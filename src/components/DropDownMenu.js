import React from 'react';

const DropDownMenu = ({options}) => {
    return (
        <div className="absolute -ml-4 mt-3 px-2 w-screen max-w-xs sm:px-0 ml-0 transform left-1/2 -translate-x-24">
            <div className="rounded-lg shadow-lg">
                <div className="rounded-lg shadow-xs overflow-hidden">
                    <div className="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        {options.map((item) => (
                            <button className="-my-3 py-2 rounded-lg">
                                <div className="space-y-1">
                                    <p className="text-base leading-6 font-medium text-gray-900">
                                        {item.title}
                                    </p>
                                    <p className="text-sm leading-5 text-gray-500">
                                        {item.description}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DropDownMenu;
