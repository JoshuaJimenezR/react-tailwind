import React from 'react';
import PreviousArrowIcon from "../Icons/PreviousArrowIcon";
import NextArrowIcon from "../Icons/NextArrowIcon";
import { Link } from 'react-router-dom';

const Table = ({header, records, type}) => {

    function renderColumnData(item, value, record, type){

        let data = null;

        switch(item){
            case 'transaction_friendly_id':

                let idType = "";

                switch(type){
                    case "detail":
                        idType = <Link to={"/transacciones/details/"+ window.btoa(unescape(encodeURIComponent( record.id ))) }>{value}</Link>;
                    break;
                    case "transaction":
                        idType = <Link to={"/transacciones/show/"+ window.btoa(unescape(encodeURIComponent( record.id ))) }>{value}</Link>;
                        break;
                    default:
                        idType = <p className="text-xs text-gray-600 dark:text-gray-400">
                            {value}
                        </p>;
                }

                data = (<td className="px-4 py-3">
                    <div className="flex items-center text-sm">
                        <div>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                {idType}
                            </p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                {record.date}
                            </p>
                        </div>
                    </div>
                </td>);
                break;
            case 'status':
                data = <td className="px-4 py-3 text-xs">
                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                                {value}
                            </span>
                        </td>;
            break;
            case 'description':
            case 'amount':
            case 'balance':
            case 'buyer':
            case 'seller':
            case 'updated_at':
            case 'percentage':
            case 'company':
            case 'amount_commission':
            case 'due_date':
            case 'type':
                data = <td className="px-4 py-3 text-sm">
                            {value}
                        </td>;
            break;
            default:
                data = null;
                break;
        }

        return data;
    }

    return (
        <div className="w-full overflow-hidden rounded-lg shadow-xs">
            <div className="w-full overflow-x-auto">
                <table className="w-full whitespace-no-wrap">
                    <thead>
                        <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                            { header.map((item) => (
                                <th className="px-4 py-3">{item}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                        {records.map((record) => (
                            <tr key={record.id} className="text-gray-700 dark:text-gray-400">
                                {Object.entries(record).map(([index, item]) => (
                                    <React.Fragment>
                                        { renderColumnData(index,item,record, type) }
                                    </React.Fragment>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
                <span className="flex items-center col-span-3">
                  Showing 1-3 of 100
                </span>
                <span className="col-span-2"></span>
                <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                  <nav aria-label="Table navigation">
                    <ul className="inline-flex items-center">
                      <li>
                        <button
                            className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                            aria-label="Previous"
                        >
                            <PreviousArrowIcon/>
                        </button>
                      </li>
                      <li>
                        <button
                            className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                        >
                          1
                        </button>
                      </li>
                      <li>
                        <button
                            className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                        >
                          2
                        </button>
                      </li>
                      <li>
                        <button
                            className="px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple"
                        >
                          3
                        </button>
                      </li>
                      <li>
                        <button
                            className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                        >
                          4
                        </button>
                      </li>
                      <li>
                        <span className="px-3 py-1">...</span>
                      </li>
                      <li>
                        <button
                            className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                        >
                          8
                        </button>
                      </li>
                      <li>
                        <button
                            className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                        >
                          9
                        </button>
                      </li>
                      <li>
                        <button
                            className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                            aria-label="Next"
                        >
                          <NextArrowIcon/>
                        </button>
                      </li>
                    </ul>
                  </nav>
                </span>
            </div>
        </div>
    );
};

export default Table;
