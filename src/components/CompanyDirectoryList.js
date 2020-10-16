import React from 'react';

const CompanyDirectoryList = ({records}) => {
    return (
        <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3">
            { records.map((item) => (
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{item.company}</div>
                        <p className="text-gray-700 text-base">
                            {item.name}
                        </p>
                        <p>{item.email}</p>
                    </div>
                    <div className="px-2 pt-1 pb-2">
                        <span
                            className="inline-block px-3 py-1 text-sm text-gray-700 mr-2 mb-2">
                            Tel: {item.tel}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CompanyDirectoryList;
