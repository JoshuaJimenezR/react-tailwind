import React from 'react';
import CloseIcon from "../Icons/CloseIcon";

const SlideOver = ({visible, title, close}) => {

    const panel = (visible ? "translate-x-0" : "translate-x-full" ) + " relative w-screen max-w-md transform transition ease-in-out duration-500 sm:duration-700 ";

    const closeButton = (visible ? "opacity-100" : "opacity-0" ) + " absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4 ease-in-out duration-500";

    return (
        <React.Fragment>
            { visible &&
                <div className={(visible ? "z-50 fixed inset-0 overflow-hidden" : "")}>
                    <div className={(visible ? "absolute inset-0 overflow-hidden" : "")}>

                        <div onClick={close} className={(visible ? "absolute inset-0 bg-gray-500 bg-opacity-75 transition transition-opacity ease-in-out duration-700 opacity-100" : "")}></div>

                        <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex">

                            <div className={panel}>

                                <div className={closeButton}>
                                    <button
                                        aria-label="Close panel"
                                        onClick={close}
                                        className="text-gray-300 hover:text-white transition ease-in-out duration-250"
                                    >
                                        <CloseIcon />
                                    </button>
                                </div>
                                <div className="h-full flex flex-col space-y-6 py-6 bg-white shadow-xl overflow-y-scroll">
                                    <header className="px-4 sm:px-6">
                                        <h2 className="text-lg leading-7 font-medium text-gray-900">
                                            { title }
                                        </h2>
                                    </header>
                                    <div className="relative flex-1 px-4 sm:px-6">
                                        <div className="absolute inset-0 px-4 sm:px-6">
                                            <div className="h-full border-2 border-dashed border-gray-200">
                                                Prueba
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            }
        </React.Fragment>
    );
};

export default SlideOver;
