import React from 'react';
import PreviousButton from "./PreviousButton";
import PageButton from "./PageButton";
import NextButton from "./NextButton";

const pages = [1,2,3,4,5];

const Details = () => {
    return (
        <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
          <span className="flex items-center col-span-3">
            Showing 1-3 of 100
          </span>
          <span className="col-span-2"></span>
          <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
            <nav aria-label="Table navigation">
              <ul className="inline-flex items-center">
                <li>
                  <PreviousButton />
                </li>
                {
                  pages.map((item) => (
                    <li>
                        <PageButton number={item} />
                    </li>
                  ))
                }
                <li>
                  <NextButton />
                </li>
              </ul>
            </nav>
          </span>
        </div>
    );
};

export default Details;