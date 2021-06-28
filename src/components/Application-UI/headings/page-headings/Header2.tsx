import React from 'react'

const Header2 = () => {
    return (
        <header className=" flex-none relative z-50 text-sm leading-6 font-medium bg-white ring-1 ring-gray-900 ring-opacity-5 shadow-sm py-5">
            <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center flex-wrap sm:flex-nowrap">
              <a href="" className="flex-none text-gray-900">ok</a>
              <p className="hidden lg:block text-sm text-gray-500 font-normal xl:border-l xl:border-gray-200 ml-3 xl:ml-4 xl:pl-4 xl:py-0.5">
                  <span className="hidden xl:inline">Beautiful UI components by Andrew Nelli</span>
                  <span className="xl:hidden">by Andrew Nelli</span>
                  </p>
              <div className="w-full flex-none mt-4 sm:mt-0 sm:w-auto sm:ml-auto flex items-center">
                  <a href="" className="hover:text-gray-900">1</a>
                  <a href="" className="hover:text-gray-900 mx-6">2</a>
                  <a href="" className="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent bg-indigo-200 p-1 rounded">
                      <p className="text-indigo-600 group-hover:text-gray-900">LOGIN</p></a>
                </div>
            </div>
        </header>
    )
}

export default Header2
