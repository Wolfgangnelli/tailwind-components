import React from 'react';
import DropDownMenu, { DDMItem } from '../elements/ddm/DropDownMenu';



const NavWithSearchBar = () => {
    let items: DDMItem[] = [
        {label: "Home"},
        {label: "About"},
        {label: "Contacts"}
    ]
    return (
        <>
        <nav className="bg-white dark:bg-gray-800 shadow py-2 md:py-4 relative">
            <div className="max-w-7xl mx-auto px-3 md:px-8">
                <div className="flex-col md:flex items-center justify-between">
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <a href="/" className="flex-shrink-0">
                                <span className="h-8 w-8">IMAGE</span>
                            </a>
                            <div className="hidden md:block">
                                <div className="flex ml-10 items-baseline space-x-4">
                                    <a href="" className="text-gray-300 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium">Item1</a>
                                    <a href="" className="text-gray-300 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium">Item2</a>
                                    <a href="" className="text-gray-300 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium">Item3</a>
                                    <a href="" className="text-gray-300 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium">Item4</a>
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <div className="md:block -mr-2 flex">
                                <form className="flex w-full max-w-sm space-x-3">
                                    <div className="relative">
                                        <input type="text" name="form-subscribe-search" id="form-subscribe-search" className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Search..." />
                                    </div>
                                    <button type="submit" className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-200">Search</button>
                                </form>
                            </div>
                            <div className="ml-4 flex items-center md:ml-6"></div>
                        </div>
                    </div>
               
                </div>
                {/* <div className="-mr-2 md:hidden">
                    <button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                    <svg width="20" height="20" fill="currentColor" className="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                    </path>
                    </svg>
                    </button>
                </div> */}
            </div>
           {/*  <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                            Item1
                        </a>
                        <a className="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                        Item2
                        </a>
                        <a className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                        Item3
                        </a>
                        <a className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                        Item4
                        </a>
                </div>
            </div> */}
        </nav>
         <div className="md:hidden absolute flex justify-center pt-2 right-1">
         <DropDownMenu items={items} label="MENU" withBackground={true} />
        </div>
        </>
    )
}

export default NavWithSearchBar;
